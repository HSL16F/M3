import fastapi.middleware.cors
import yfinance as yf
from fastapi import FastAPI
import finnhub

# from polygon import RESTClient

finnhub_api_key = "clil6rpr01qvsg5971j0clil6rpr01qvsg5971jg"
finnhub_client = finnhub.Client(api_key=finnhub_api_key)

# Custom functions
from functions import *

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",  # Add your React app's URL here
    "https://m3_fast_api-1-z8464729.deta.app"
    "https://m3-puce.vercel.app/"
    "http://127.0.0.1:2000"
]

app.add_middleware(
    fastapi.middleware.cors.CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

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

@app.get("/stocks/{symbol}")
def echo(symbol: str):
    stock_data = get_stock_data(symbol)
    return {"symbol": symbol, "data": stock_data}

@app.get("/")
def hello_world():
    return {"Hello": "World"}

@app.get("/stock/description/{symbol}")
def descript_call(symbol: str):
    data = get_security_description(symbol)
    return {"Security": symbol.upper(), "Data": data}

"""
Returns various data on the stock
General structure
{
    stock: TICKER,
    description: descriptipn
    financial_data: {
        52high
        52low
        beta
        etc
    }
    associated_data: {
        company classifcations: {
            industry
            sector
            hq
            ...
        }
        peers: related_companies
    }
}
"""
@app.get("/stocks/financial_data/{symbol}")
def financial_data(symbol: str):
    output = {
            "stock": symbol.upper(),
            "description": get_security_description(symbol),
            "financial": get_financials(symbol),
            "associated_data": associated_data_func(symbol)
            }
    return(output)

# @api.get("/news/{ticker}")
# def news(ticker: str):
#     news_articles = polygon_news(ticker)
#     return news_articles
