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


# def polygon_news(ticker):
#     client = RESTClient(api_key=api_key)
#
#     print(f"Recent news for {ticker}")
#     news_articles = {}
#     for (i, n) in enumerate(client.list_ticker_news(ticker, limit=5)):
#         curr_news = {"Title": n.title, "Description": n.description, "Tickers": n.tickers,
#                      "url": n.article_url, "Date": n.published_utc}
#         news_articles[i] = curr_news
#         if i == 5:
#             break
#
#     return news_articles



def get_security_description(ticker):
    """
    Returns a description of the company associated with the given stock ticker.

    :param ticker: Stock ticker symbol as a string.
    :return: A string containing the description of the company.
    """
    return f"Ticker: {ticker}\nDescription: {company_info(ticker)}"
    

# Get current price
def get_price(ticker):
    finnhub_client = finnhub.Client(api_key="clil6rpr01qvsg5971j0clil6rpr01qvsg5971jg")

    return finnhub_client.quote(ticker)

def get_financials(ticker):
    finnhub_client = finnhub.Client(api_key="clil6rpr01qvsg5971j0clil6rpr01qvsg5971jg")

    return finnhub_client.company_basic_financials('AAPL', 'all')


# Example usage
# print(get_security_description(ticker))
# print(get_stock_data(ticker))
