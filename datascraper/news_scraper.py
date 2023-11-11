"""
For a given input
Scrape various news articles
Depending on the source from the ticker
General functions for each news site ticker
"""
import time
import requests
from bs4 import BeautifulSoup as Bs
import re
import pandas as pd

# Types of requests/queries for website
access_request_type = ["search", "headline", "company information"]


headers = {
         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) '
                       'Chrome/75.0.3770.142 Safari/537.36'
    }


def soup_engagement_function(url):
    try:
        subj_list = requests.get(url, headers=headers).content
        soup = Bs(subj_list, features="html.parser")
        return soup
    except:
        print(f"Unable to scrape from {url}")
    return None

def seach_news_headlines(search_input):

    return -1

def bloomberg_scrape(request_type, ticker=None):
    blmbrg_url = "https://www.bloomberg.com"
    if request_type == "headline":
        search = f"https://www.bloomberg.com/search?query={ticker}" # Note may depend on region
        soup_engagement_function(search)
    return -1