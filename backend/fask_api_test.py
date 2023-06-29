from flask import Flask, request
import yfinance as yf

app = Flask(__name__)

@app.route('/')
def index():
    return '''
        <form method="post">
            Input Text: <input type="text" name="text">
            <input type="submit" value="Submit">
        </form>
    '''

@app.route('/', methods=['POST'])
def process():
    text = request.form['text']
    # process the text here
    processed_text = text.upper()
    ticker = yf.Ticker(processed_text)

    # get all stock info
    ticker_info = ticker.info
    return f"Recommendation mean for {processed_text}: {ticker_info['recommendationMean']}\n" \
           f"With current shareprice at {ticker_info.get('currentPrice')}"


if __name__ == '__main__':
    app.run()
