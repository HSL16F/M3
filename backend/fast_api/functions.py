# Location for all API functions to be stored in

import yfinance as yf
from fastapi import FastAPI
# from polygon import RESTClient
import time
import requests
from bs4 import BeautifulSoup as Bs
import re
import pandas as pd
import finnhub

# Custom functions
from datascraper.news_scraper import company_info


def get_stock_data(symbol: str):
    ticker = yf.Ticker(symbol)
    data = ticker.history(period="1d")
    current_price = data["Close"].iloc[-1]
    stock_data = {"Name": ticker.info["longName"],
                  "Current_price": current_price, "Industry": ticker.info["industry"],
                  "Sector": ticker.info["sector"], "Exchange": ticker.info["exchange"],
                  "Country": ticker.info["country"], "Currency": ticker.info["currency"],
                  "MarketCap": ticker.info["marketCap"], "RecommendationMean": ticker.info["recommendationMean"]}
    # Process the data or perform any required operations
    return stock_data


api_key = "2RLYcjcuOOHnJ1Vw5_jYdsXHTsPlDkXe"
finnhub_client = finnhub.Client(api_key="clil6rpr01qvsg5971j0clil6rpr01qvsg5971jg")
alpha_vantage_api_key = "UYYYLGQI0REM0CR5"
quandl_api_key = "7ubNoNSSYwjuMtHLJ18z"
FRED_api_key = "d4d01db978b5cabd45c025837c5e290a"

# def polygon_news(ticker):
#     client = RESTClient(api_key=api_key)

#     print(f"Recent news for {ticker}")
#     news_articles = {}
#     for (i, n) in enumerate(client.list_ticker_news(ticker, limit=5)):
#         curr_news = {"Title": n.title, "Description": n.description, "Tickers": n.tickers,
#                      "url": n.article_url, "Date": n.published_utc}
#         news_articles[i] = curr_news
#         if i == 5:
#             break

#     return news_articles



def get_security_description(ticker):
    """
    Returns a description of the company associated with the given stock ticker.

    :param ticker: Stock ticker symbol as a string.
    :return: A string containing the description of the company.
    """
    return company_info(ticker)
    

# Get current price
def get_price(ticker):
    finnhub_client = finnhub.Client(api_key="clil6rpr01qvsg5971j0clil6rpr01qvsg5971jg")

    return finnhub_client.quote(ticker)

def get_financials(ticker):
    finnhub_client = finnhub.Client(api_key="clil6rpr01qvsg5971j0clil6rpr01qvsg5971jg")
    all_fin = finnhub_client.company_basic_financials(ticker, 'all')
    metrics = ["52WeekHigh", "52WeekLow", "beta", "cashFlowPerShareAnnual", "bookValuePerShareAnnual", "peAnnual", "priceRelativeToS&P50052Week", "totalDebt/totalEquityAnnual", "totalDebt/totalEquityQuarterly", "yearToDatePriceReturnDaily"]
    metric_dict = {}
    for metric in metrics:
        metric_dict[metric] = all_fin['metric'][metric]
    return {"selected_fundemental_data": metric_dict, "peers": finnhub_client.company_peers(ticker)}

def associated_data_func(ticker):
    output_dict = {}
    output_dict["peers"] = finnhub_client.company_peers(ticker)
    return output_dict


def get_market_data(api_key, symbol):
    """
    Fetches market data for a given symbol from Alpha Vantage.

    Args:
    api_key (str): Your Alpha Vantage API key.
    symbol (str): The market index symbol.

    Returns:
    dict: The market data.
    """
    url = f"https://www.alphavantage.co/query"
    params = {
        "function": "TIME_SERIES_DAILY",
        "symbol": symbol,
        "apikey": api_key
    }

    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        return f"Error: {response.status_code}"


def get_commdity_data(api_key, function):
    url = "https://www.alphavantage.co/query"
    params = {
        "function": function,
        "time_series": "&interval=monthly",
        "apikey": api_key,
    }

    response = requests.get(url, params=params)

    if response.status_code == 200:
        return response.json()
    else:
        return f"Error: {response.status_code}"

# Example usage
# print(get_security_description(ticker))
# print(get_stock_data(ticker))


# Economic data
# Call some economic data api
# call fed data, note post not working right now
def call_usaspending_api(endpoint, agency_code=None, method='GET', data=None, params=None):
    BASE_URL = "https://api.usaspending.gov"
    # Replace placeholder in the endpoint with the actual agency code if provided
    if agency_code:
        endpoint = endpoint.replace('<TOPTIER_AGENCY_CODE>', agency_code)

    # Construct the full URL
    url = f"{BASE_URL}{endpoint}"

    # Perform the request based on the method
    if method.upper() == 'GET':
        response = requests.get(url, params=params)
    elif method.upper() == 'POST':
        response = requests.post(url, json=data)
    else:
        raise ValueError("Method must be 'GET' or 'POST'.")

    # Check the status code and return the JSON response if successful
    if response.ok:
        return response.json()
    else:
        # Raise an exception or handle it as you see fit
        response.raise_for_status()
    return "Error in function, endpoint not called, check internet connection or possible other bug"

# Example call
# usa_spending_endpoints_df = pd.read_csv("USAspending_api_endpoints.csv", index_col="Unnamed: 0")
# agency_codes_df = pd.read_csv("USAspending_callable_agency_processed.csv", index_col="Unnamed: 0")
# agency_codes_df = agency_codes_df.drop(columns="Unnamed: 0")
# agency_codes_dict = agency_codes_df.to_dict()["Agency_Code"]
# Note if length 1, then convert to 00X, length 2, convert to 0XX, and remain same for length 3
# code = str(agency_codes_df.to_dict()["Agency_Code"]["Department of Commerce"])
# if len(code) == 1:
#   code = f"00{code}"
# elif len(code) == 2:
#   code = f"0{code}"
# call_usaspending_api(usa_spending_endpoints_df.iloc[1]["Endpoint"], agency_code='code')