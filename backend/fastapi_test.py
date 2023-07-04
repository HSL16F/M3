import yfinance as yf
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",  # Add your React app's URL here
]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

def get_stock_data(symbol: str):
    ticker = yf.Ticker(symbol)
    data = ticker.history(period="1d")
    current_price = data["Close"].iloc[-1]
    stock_data = {"Name": ticker.info["longName"], "Current_price": current_price, "Industry": ticker.info["industry"],  "Sector": ticker.info["sector"], "Exchange": ticker.info["exchange"], "Country": ticker.info["country"], "Currency": ticker.info["currency"], "MarketCap": ticker.info["marketCap"]}
    # Process the data or perform any required operations
    return stock_data

@api.get("/stocks/{symbol}")
def echo(symbol: str):
    stock_data = get_stock_data(symbol)
    return {"symbol": symbol, "data": stock_data}

@api.get("/")
def hello_world():
    return {"Hello": "World"}
