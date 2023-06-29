import yfinance as yf
from polygon import RESTClient

# ticker = yf.Ticker("GOOG")

def get_company_info(ticker):
    return ticker.info


# possible keys:
# ['address1', 'city', 'state', 'zip', 'country', 'phone', 'website',
# 'industry', 'industryDisp', 'sector', 'longBusinessSummary', 'fullTimeEmployees',
# 'companyOfficers', 'auditRisk', 'boardRisk', 'compensationRisk', 'shareHolderRightsRisk',
# 'overallRisk', 'governanceEpochDate', 'compensationAsOfEpochDate', 'maxAge', 'priceHint',
# 'previousClose', 'open', 'dayLow', 'dayHigh', 'regularMarketPreviousClose', 'regularMarketOpen',
# 'regularMarketDayLow', 'regularMarketDayHigh', 'payoutRatio', 'beta', 'trailingPE', 'forwardPE',
# 'volume', 'regularMarketVolume', 'averageVolume', 'averageVolume10days', 'averageDailyVolume10Day',
# 'bid', 'ask', 'bidSize', 'askSize', 'marketCap', 'fiftyTwoWeekLow', 'fiftyTwoWeekHigh',
# 'priceToSalesTrailing12Months', 'fiftyDayAverage', 'twoHundredDayAverage', 'trailingAnnualDividendRate',
# 'trailingAnnualDividendYield', 'currency', 'enterpriseValue', 'profitMargins', 'floatShares',
# 'sharesOutstanding', 'sharesShort', 'sharesShortPriorMonth', 'sharesShortPreviousMonthDate',
# 'dateShortInterest', 'sharesPercentSharesOut', 'heldPercentInsiders', 'heldPercentInstitutions',
# 'shortRatio', 'impliedSharesOutstanding', 'bookValue', 'priceToBook', 'lastFiscalYearEnd', 'nextFiscalYearEnd',
# 'mostRecentQuarter', 'earningsQuarterlyGrowth', 'netIncomeToCommon', 'trailingEps', 'forwardEps', 'pegRatio',
# 'lastSplitFactor', 'lastSplitDate', 'enterpriseToRevenue', 'enterpriseToEbitda', '52WeekChange',
# 'SandP52WeekChange', 'exchange', 'quoteType', 'symbol', 'underlyingSymbol', 'shortName', 'longName',
# 'firstTradeDateEpochUtc', 'timeZoneFullName', 'timeZoneShortName', 'uuid', 'messageBoardId',
# 'gmtOffSetMilliseconds', 'currentPrice', 'targetHighPrice', 'targetLowPrice', 'targetMeanPrice',
# 'targetMedianPrice', 'recommendationMean', 'recommendationKey', 'numberOfAnalystOpinions',
# 'totalCash', 'totalCashPerShare', 'ebitda', 'totalDebt', 'quickRatio', 'currentRatio', 'totalRevenue',
# 'debtToEquity', 'revenuePerShare', 'returnOnAssets', 'returnOnEquity', 'grossProfits', 'freeCashflow',
# 'operatingCashflow', 'earningsGrowth', 'revenueGrowth', 'grossMargins', 'ebitdaMargins', 'operatingMargins',
# 'financialCurrency', 'trailingPegRatio']

def polygon_source(ticker, news=True):
    api_key = "2RLYcjcuOOHnJ1Vw5_jYdsXHTsPlDkXe"
    client = RESTClient(api_key=api_key)

    financials = client.get_ticker_details(ticker)
    print(financials.name)
    print(financials.ticker)
    print(financials.sic_description)
    print(financials.homepage_url)
    print(financials.description)

    # Financial news from the company
    if news:
        print(f"Recent news for {ticker}")
        for (i, n) in enumerate(client.list_ticker_news(ticker, limit=5)):
            print(i, n)
            if i == 5:
                break

    return -1


polygon_source("GOOG", news=False)
polygon_source("AAPL", news=False)
polygon_source("MSFT", news=False)
polygon_source("AMZN", news=False)
polygon_source("TSLA", news=False)
