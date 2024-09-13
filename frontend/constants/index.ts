import { MarketStatusResponse } from "@/components/contexts/types/alphaVantage-types";

  export interface Stock {
    company: string,
    ticker: string,
    marketCap: string,
    stockPrice: string,
    [key: string]: any,
  }
  export const top30_default: Stock[] = [
    { company: 'Apple Inc.', ticker: 'AAPL', marketCap: '2.65T', stockPrice: '$170.55' },
    { company: 'Microsoft Corp.', ticker: 'MSFT', marketCap: '2.50T', stockPrice: '$340.12' },
    { company: 'Saudi Aramco', ticker: '2222.SR', marketCap: '2.00T', stockPrice: 'SAR 36.85' },
    { company: 'Alphabet Inc.', ticker: 'GOOGL', marketCap: '1.65T', stockPrice: '$140.23' },
    { company: 'Amazon.com Inc.', ticker: 'AMZN', marketCap: '1.40T', stockPrice: '$130.42'},
    { company: 'Tesla Inc.', ticker: 'TSLA', marketCap: '950B', stockPrice: '$865.32' },
    { company: 'Berkshire Hathaway Inc.', ticker: 'BRK.B', marketCap: '750B', stockPrice: '$334.45' },
    { company: 'NVIDIA Corp.', ticker: 'NVDA', marketCap: '730B', stockPrice: '$470.09' },
    { company: 'Meta Platforms Inc.', ticker: 'META', marketCap: '700B', stockPrice: '$280.19' },
    { company: 'Johnson & Johnson', ticker: 'JNJ', marketCap: '630B', stockPrice: '$170.03' },
    { company: 'Visa Inc.', ticker: 'V', marketCap: '620B', stockPrice: '$243.27' },
    { company: 'Procter & Gamble Co.', ticker: 'PG', marketCap: '580B', stockPrice: '$154.60' },
    { company: 'UnitedHealth Group Inc.', ticker: 'UNH', marketCap: '570B', stockPrice: '$515.38' },
    { company: 'JPMorgan Chase & Co.', ticker: 'JPM', marketCap: '560B', stockPrice: '$150.95' },
    { company: 'Walmart Inc.', ticker: 'WMT', marketCap: '510B', stockPrice: '$153.24' },
    { company: 'Mastercard Inc.', ticker: 'MA', marketCap: '500B', stockPrice: '$375.11' },
    { company: 'Intel Corp.', ticker: 'INTC', marketCap: '485B', stockPrice: '$40.52' },
    { company: 'The Home Depot Inc.', ticker: 'HD', marketCap: '470B', stockPrice: '$350.78' },
    { company: 'Coca-Cola Co.', ticker: 'KO', marketCap: '460B', stockPrice: '$62.23' },
    { company: 'Pfizer Inc.', ticker: 'PFE', marketCap: '450B', stockPrice: '$41.87' },
    { company: 'Chevron Corp.', ticker: 'CVX', marketCap: '440B', stockPrice: '$172.65' },
    { company: 'Cisco Systems Inc.', ticker: 'CSCO', marketCap: '430B', stockPrice: '$56.20' },
    { company: 'Oracle Corp.', ticker: 'ORCL', marketCap: '420B', stockPrice: '$104.15' },
    { company: 'IBM Corp.', ticker: 'IBM', marketCap: '400B', stockPrice: '$135.45' },
    { company: 'Exxon Mobil Corp.', ticker: 'XOM', marketCap: '390B', stockPrice: '$124.75' },
    { company: 'Adobe Inc.', ticker: 'ADBE', marketCap: '380B', stockPrice: '$597.12' },
    { company: 'Salesforce.com Inc.', ticker: 'CRM', marketCap: '370B', stockPrice: '$224.91' },
    { company: 'Broadcom Inc.', ticker: 'AVGO', marketCap: '360B', stockPrice: '$887.29' },
    { company: 'Netflix Inc.', ticker: 'NFLX', marketCap: '350B', stockPrice: '$501.83' },
    { company: 'United Parcel Service Inc.', ticker: 'UPS', marketCap: '340B', stockPrice: '$176.59' },
    { company: 'Qualcomm Inc.', ticker: 'QCOM', marketCap: '330B', stockPrice: '$138.27' },
    { company: 'PayPal Holdings Inc.', ticker: 'PYPL', marketCap: '320B', stockPrice: '$252.14' },
    { company: 'Texas Instruments Inc.', ticker: 'TXN', marketCap: '310B', stockPrice: '$194.50' },
    { company: 'Goldman Sachs Group Inc.', ticker: 'GS', marketCap: '300B', stockPrice: '$392.25' },
];

export const default_TopGainersLosers = {
    "last_updated": "2024-09-10 16:15:59 US/Eastern",
    "metadata": "Top gainers, losers, and most actively traded US tickers",
    "most_actively_traded": [
        {
            "change_amount": "1.0029",
            "change_percentage": "306.6035%",
            "price": "1.33",
            "ticker": "QH",
            "volume": "319073072"
        },
        {
            "change_amount": "1.63",
            "change_percentage": "1.5309%",
            "price": "108.1",
            "ticker": "NVDA",
            "volume": "262361913"
        },
        {
            "change_amount": "-0.24",
            "change_percentage": "-2.5641%",
            "price": "9.12",
            "ticker": "SQQQ",
            "volume": "158094904"
        },
        {
            "change_amount": "0.96",
            "change_percentage": "92.3077%",
            "price": "2.0",
            "ticker": "BKYI",
            "volume": "145526491"
        },
        {
            "change_amount": "-0.0076",
            "change_percentage": "-15.9664%",
            "price": "0.04",
            "ticker": "WTO",
            "volume": "128652509"
        },
        {
            "change_amount": "0.0044",
            "change_percentage": "5.8201%",
            "price": "0.08",
            "ticker": "MAXN",
            "volume": "105090774"
        },
        {
            "change_amount": "-0.0132",
            "change_percentage": "-41.25%",
            "price": "0.0188",
            "ticker": "VHAI",
            "volume": "100292666"
        },
        {
            "change_amount": "0.15",
            "change_percentage": "0.4335%",
            "price": "34.75",
            "ticker": "PLTR",
            "volume": "89705210"
        },
        {
            "change_amount": "0.92",
            "change_percentage": "3.354%",
            "price": "28.35",
            "ticker": "SOXL",
            "volume": "80473527"
        },
        {
            "change_amount": "0.8348",
            "change_percentage": "115.1131%",
            "price": "1.56",
            "ticker": "AILE",
            "volume": "80154750"
        },
        {
            "change_amount": "9.9",
            "change_percentage": "4.5776%",
            "price": "226.17",
            "ticker": "TSLA",
            "volume": "78111874"
        },
        {
            "change_amount": "-1.48",
            "change_percentage": "-8.4091%",
            "price": "16.12",
            "ticker": "HPE",
            "volume": "68145642"
        },
        {
            "change_amount": "-0.345",
            "change_percentage": "-3.2364%",
            "price": "10.315",
            "ticker": "F",
            "volume": "61145067"
        },
        {
            "change_amount": "0.21",
            "change_percentage": "0.9767%",
            "price": "21.71",
            "ticker": "T",
            "volume": "60839052"
        },
        {
            "change_amount": "-0.475",
            "change_percentage": "-1.0567%",
            "price": "44.475",
            "ticker": "XLF",
            "volume": "58972341"
        },
        {
            "change_amount": "-0.085",
            "change_percentage": "-1.526%",
            "price": "5.485",
            "ticker": "NIO",
            "volume": "58288275"
        },
        {
            "change_amount": "-0.0289",
            "change_percentage": "-17.0%",
            "price": "0.1411",
            "ticker": "MULN",
            "volume": "57817969"
        },
        {
            "change_amount": "-0.03",
            "change_percentage": "-0.4237%",
            "price": "7.05",
            "ticker": "SOFI",
            "volume": "57628682"
        },
        {
            "change_amount": "-0.09",
            "change_percentage": "-0.4719%",
            "price": "18.98",
            "ticker": "INTC",
            "volume": "55197022"
        },
        {
            "change_amount": "0.86",
            "change_percentage": "8.8751%",
            "price": "10.55",
            "ticker": "TSLL",
            "volume": "55145492"
        }
    ],
    "top_gainers": [
        {
            "change_amount": "1.0029",
            "change_percentage": "306.6035%",
            "price": "1.33",
            "ticker": "QH",
            "volume": "319073072"
        },
        {
            "change_amount": "0.1043",
            "change_percentage": "158.7519%",
            "price": "0.17",
            "ticker": "AILEW",
            "volume": "301364"
        },
        {
            "change_amount": "0.1201",
            "change_percentage": "150.3129%",
            "price": "0.2",
            "ticker": "HLLY+",
            "volume": "35470"
        },
        {
            "change_amount": "0.0447",
            "change_percentage": "148.0132%",
            "price": "0.0749",
            "ticker": "BFLY+",
            "volume": "160015"
        },
        {
            "change_amount": "0.8348",
            "change_percentage": "115.1131%",
            "price": "1.56",
            "ticker": "AILE",
            "volume": "80154750"
        },
        {
            "change_amount": "0.0159",
            "change_percentage": "113.5714%",
            "price": "0.0299",
            "ticker": "BTCTW",
            "volume": "26773"
        },
        {
            "change_amount": "0.0525",
            "change_percentage": "95.4545%",
            "price": "0.1075",
            "ticker": "BAERW",
            "volume": "96223"
        },
        {
            "change_amount": "0.96",
            "change_percentage": "92.3077%",
            "price": "2.0",
            "ticker": "BKYI",
            "volume": "145526491"
        },
        {
            "change_amount": "0.0176",
            "change_percentage": "87.5622%",
            "price": "0.0377",
            "ticker": "LDTCW",
            "volume": "45439"
        },
        {
            "change_amount": "0.2125",
            "change_percentage": "79.4393%",
            "price": "0.48",
            "ticker": "CLBR+",
            "volume": "1637"
        },
        {
            "change_amount": "0.0137",
            "change_percentage": "79.1908%",
            "price": "0.031",
            "ticker": "HOVRW",
            "volume": "10143"
        },
        {
            "change_amount": "0.0139",
            "change_percentage": "69.5%",
            "price": "0.0339",
            "ticker": "GRDIW",
            "volume": "1100"
        },
        {
            "change_amount": "0.018",
            "change_percentage": "67.6692%",
            "price": "0.0446",
            "ticker": "WENAW",
            "volume": "29147"
        },
        {
            "change_amount": "2.74",
            "change_percentage": "53.7255%",
            "price": "7.84",
            "ticker": "TRVN",
            "volume": "679848"
        },
        {
            "change_amount": "0.0216",
            "change_percentage": "52.5547%",
            "price": "0.0627",
            "ticker": "PLMIW",
            "volume": "417"
        },
        {
            "change_amount": "1.29",
            "change_percentage": "49.6154%",
            "price": "3.89",
            "ticker": "FBLG",
            "volume": "7099049"
        },
        {
            "change_amount": "0.1009",
            "change_percentage": "48.0019%",
            "price": "0.3111",
            "ticker": "SHOTW",
            "volume": "5135"
        },
        {
            "change_amount": "1.06",
            "change_percentage": "47.5336%",
            "price": "3.29",
            "ticker": "SMX",
            "volume": "29030516"
        },
        {
            "change_amount": "0.0094",
            "change_percentage": "46.7662%",
            "price": "0.0295",
            "ticker": "WLDSW",
            "volume": "1856"
        },
        {
            "change_amount": "0.0159",
            "change_percentage": "46.6276%",
            "price": "0.05",
            "ticker": "DHAIW",
            "volume": "14152"
        }
    ],
    "top_losers": [
        {
            "change_amount": "-0.0093",
            "change_percentage": "-65.035%",
            "price": "0.005",
            "ticker": "UKOMW",
            "volume": "94830"
        },
        {
            "change_amount": "-0.46",
            "change_percentage": "-60.5263%",
            "price": "0.3",
            "ticker": "VHAI+A",
            "volume": "29229"
        },
        {
            "change_amount": "-0.0259",
            "change_percentage": "-60.373%",
            "price": "0.017",
            "ticker": "DPCSW",
            "volume": "42572"
        },
        {
            "change_amount": "-0.0999",
            "change_percentage": "-58.7647%",
            "price": "0.0701",
            "ticker": "GUT^#",
            "volume": "146643"
        },
        {
            "change_amount": "-0.457",
            "change_percentage": "-57.125%",
            "price": "0.343",
            "ticker": "TDW+",
            "volume": "4827"
        },
        {
            "change_amount": "-0.0105",
            "change_percentage": "-50.2392%",
            "price": "0.0104",
            "ticker": "NCPLW",
            "volume": "10000"
        },
        {
            "change_amount": "-0.0035",
            "change_percentage": "-50.0%",
            "price": "0.0035",
            "ticker": "SNAXW",
            "volume": "45537"
        },
        {
            "change_amount": "-0.0079",
            "change_percentage": "-46.7456%",
            "price": "0.009",
            "ticker": "CMAXW",
            "volume": "107400"
        },
        {
            "change_amount": "-0.037",
            "change_percentage": "-46.25%",
            "price": "0.043",
            "ticker": "BNAIW",
            "volume": "51894"
        },
        {
            "change_amount": "-0.0128",
            "change_percentage": "-45.5516%",
            "price": "0.0153",
            "ticker": "CURIW",
            "volume": "38050"
        },
        {
            "change_amount": "-0.165",
            "change_percentage": "-43.5356%",
            "price": "0.214",
            "ticker": "SING",
            "volume": "6882129"
        },
        {
            "change_amount": "-0.0995",
            "change_percentage": "-43.3551%",
            "price": "0.13",
            "ticker": "BCTXW",
            "volume": "11337"
        },
        {
            "change_amount": "-0.0201",
            "change_percentage": "-42.8571%",
            "price": "0.0268",
            "ticker": "SABSW",
            "volume": "1094"
        },
        {
            "change_amount": "-0.0508",
            "change_percentage": "-42.053%",
            "price": "0.07",
            "ticker": "CYTHW",
            "volume": "1928"
        },
        {
            "change_amount": "-0.0132",
            "change_percentage": "-41.25%",
            "price": "0.0188",
            "ticker": "VHAI",
            "volume": "100292666"
        },
        {
            "change_amount": "-0.0198",
            "change_percentage": "-39.6%",
            "price": "0.0302",
            "ticker": "EVE+",
            "volume": "55370"
        },
        {
            "change_amount": "-0.0789",
            "change_percentage": "-39.4697%",
            "price": "0.121",
            "ticker": "RVPHW",
            "volume": "67240"
        },
        {
            "change_amount": "-0.4676",
            "change_percentage": "-38.3279%",
            "price": "0.7524",
            "ticker": "EGIO",
            "volume": "2745332"
        },
        {
            "change_amount": "-7.7",
            "change_percentage": "-35.192%",
            "price": "14.18",
            "ticker": "GPUS-D",
            "volume": "17393"
        },
        {
            "change_amount": "-0.0059",
            "change_percentage": "-34.9112%",
            "price": "0.011",
            "ticker": "LFLYW",
            "volume": "20000"
        }
    ]
}

export const default_MarketStatus: MarketStatusResponse = {
    "endpoint": "Global Market Open & Close Status",
    "markets": [
        {
            "current_status": "open",
            "local_close": "16:15",
            "local_open": "09:30",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "NASDAQ, NYSE, AMEX, BATS",
            "region": "United States"
        },
        {
            "current_status": "open",
            "local_close": "16:00",
            "local_open": "09:30",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "Toronto, Toronto Ventures",
            "region": "Canada"
        },
        {
            "current_status": "closed",
            "local_close": "16:30",
            "local_open": "08:00",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "London",
            "region": "United Kingdom"
        },
        {
            "current_status": "closed",
            "local_close": "20:00",
            "local_open": "08:00",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "XETRA, Berlin, Frankfurt, Munich, Stuttgart",
            "region": "Germany"
        },
        {
            "current_status": "closed",
            "local_close": "17:30",
            "local_open": "09:00",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "Paris",
            "region": "France"
        },
        {
            "current_status": "closed",
            "local_close": "17:30",
            "local_open": "09:00",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "Barcelona, Madrid",
            "region": "Spain"
        },
        {
            "current_status": "closed",
            "local_close": "16:30",
            "local_open": "08:00",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "Lisbon",
            "region": "Portugal"
        },
        {
            "current_status": "closed",
            "local_close": "15:00",
            "local_open": "09:00",
            "market_type": "Equity",
            "notes": "Noon trading break from 11:30 to 12:30 local time",
            "primary_exchanges": "Tokyo",
            "region": "Japan"
        },
        {
            "current_status": "closed",
            "local_close": "15:30",
            "local_open": "09:15",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "NSE, BSE",
            "region": "India"
        },
        {
            "current_status": "closed",
            "local_close": "15:00",
            "local_open": "09:30",
            "market_type": "Equity",
            "notes": "Noon trading break from 11:30 to 13:00 local time",
            "primary_exchanges": "Shanghai, Shenzhen",
            "region": "Mainland China"
        },
        {
            "current_status": "closed",
            "local_close": "16:00",
            "local_open": "09:30",
            "market_type": "Equity",
            "notes": "Noon trading break from 12:00 to 13:00 local time",
            "primary_exchanges": "Hong Kong",
            "region": "Hong Kong"
        },
        {
            "current_status": "open",
            "local_close": "17:30",
            "local_open": "10:00",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "Sao Paolo",
            "region": "Brazil"
        },
        {
            "current_status": "open",
            "local_close": "15:00",
            "local_open": "08:30",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "Mexico",
            "region": "Mexico"
        },
        {
            "current_status": "closed",
            "local_close": "17:00",
            "local_open": "09:00",
            "market_type": "Equity",
            "notes": "",
            "primary_exchanges": "Johannesburg",
            "region": "South Africa"
        },
        {
            "current_status": "open",
            "local_close": "23:59",
            "local_open": "00:00",
            "market_type": "Forex",
            "notes": "The forex market is open 24 hours a day, EXCEPT between 16:00 EST on Friday and 17:00 EST on Sunday",
            "primary_exchanges": "Global",
            "region": "Global"
        },
        {
            "current_status": "open",
            "local_close": "23:59",
            "local_open": "00:00",
            "market_type": "Cryptocurrency",
            "notes": "The cryptocurrency market is open 24 hours a day",
            "primary_exchanges": "Global",
            "region": "Global"
        }
    ]
}

export const default_NewsSentiments = {
  "feed": [
      {
          "authors": [],
          "banner_image": null,
          "category_within_source": "Investing",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": -0.035838,
          "source": "CNBC",
          "source_domain": "www.cnbc.com",
          "summary": "The S&P 500 and the Nasdaq Composite posted back-to-back gains on Tuesday. Here's what CNBC TV is watching going into Wednesday.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.049835",
                  "ticker": "C",
                  "ticker_sentiment_label": "Somewhat-Bearish",
                  "ticker_sentiment_score": "-0.230288"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "BAC",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.016016"
              },
              {
                  "relevance_score": "0.099476",
                  "ticker": "ESS",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.105067"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "WFC",
                  "ticker_sentiment_label": "Somewhat-Bearish",
                  "ticker_sentiment_score": "-0.213248"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "GM",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "MS",
                  "ticker_sentiment_label": "Somewhat-Bearish",
                  "ticker_sentiment_score": "-0.230288"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "XOM",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "CCI",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.124191"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "GS",
                  "ticker_sentiment_label": "Somewhat-Bearish",
                  "ticker_sentiment_score": "-0.19922"
              },
              {
                  "relevance_score": "0.099476",
                  "ticker": "MAA",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.105067"
              },
              {
                  "relevance_score": "0.049835",
                  "ticker": "CGC",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.081314"
              }
          ],
          "time_published": "20240910T233553",
          "title": "Wednesday's big stock stories: What's likely to move the market in the next trading session",
          "topics": [
              {
                  "relevance_score": "0.2",
                  "topic": "Life Sciences"
              },
              {
                  "relevance_score": "0.2",
                  "topic": "Energy & Transportation"
              },
              {
                  "relevance_score": "0.2",
                  "topic": "Finance"
              },
              {
                  "relevance_score": "0.451494",
                  "topic": "Economy - Monetary"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "0.2",
                  "topic": "Manufacturing"
              },
              {
                  "relevance_score": "0.2",
                  "topic": "Real Estate & Construction"
              }
          ],
          "url": "https://www.cnbc.com/2024/09/10/wednesdays-stock-stories-whats-likely-to-move-the-market.html"
      },
      {
          "authors": [
              "Jason Nelson"
          ],
          "banner_image": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2023/08/elon-musk-x-twitter-gID_7.jpeg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.267597,
          "source": "Decrypt.co",
          "source_domain": "decrypt.co",
          "summary": "The Tesla CEO opined that robots will bring both comfort and a human existential crisis.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.325208",
                  "ticker": "OPTGF",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.455035"
              },
              {
                  "relevance_score": "0.083541",
                  "ticker": "NVDA",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.060264"
              },
              {
                  "relevance_score": "0.246999",
                  "ticker": "TSLA",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.092328"
              }
          ],
          "time_published": "20240910T233510",
          "title": "AI, Robotics Advances Will Bring 'Crisis of Meaning', Elon Musk Says",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Manufacturing"
              }
          ],
          "url": "https://decrypt.co/248815/ai-robotics-advances-will-bring-crisis-of-meaning-elon-musk-says"
      },
      {
          "authors": [
              "Xinyi Wu"
          ],
          "banner_image": "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1024,format=auto/sites/default/files/d8/images/canvas/2024/09/10/aaa13c16-5751-4fac-b19b-de95ff31e7c5_5158feb3.jpg",
          "category_within_source": "Companies",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.211383,
          "source": "South China Morning Post",
          "source_domain": "www.scmp.com",
          "summary": "InvestHK has assisted nine medical technology companies to set up or expand their businesses, attracting US$7.7 million of investments.",
          "ticker_sentiment": [],
          "time_published": "20240910T233008",
          "title": "Regulatory support, connector role a boon to Hong Kong's med-tech hub ambition",
          "topics": [
              {
                  "relevance_score": "0.158519",
                  "topic": "Mergers & Acquisitions"
              }
          ],
          "url": "https://www.scmp.com/business/banking-finance/article/3277978/hong-kongs-regulatory-support-connector-role-appeal-investors-medical-tech-firms-say"
      },
      {
          "authors": [
              "Globe Newswire"
          ],
          "banner_image": "https://ml.globenewswire.com/Resource/Download/c89c4483-c52b-469c-9c2a-0cd591045666/pharmaceutical-packaging-equipment-market.jpg",
          "category_within_source": "General",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.16714,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "Wilmington, Delaware, United States, Transparency Market Research, Inc. , Sept. 10, 2024 ( GLOBE NEWSWIRE ) -- The global pharmaceutical packaging equipment market ( 医薬品包装装置市場 ) was projected to attain US$ 5.6 billion in 2023.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.03916",
                  "ticker": "GOOG",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              },
              {
                  "relevance_score": "0.117104",
                  "ticker": "WMGTF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.052862"
              }
          ],
          "time_published": "20240910T233000",
          "title": "Pharmaceutical Packaging Equipment Market Set to Expand at 6.2% CAGR and Hitting USD 10.8 Billion by 2034 | Analysis by Transparency Market Research",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.108179",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/g40806250/pharmaceutical-packaging-equipment-market-set-to-expand-at-6-2-cagr-and-hitting-usd-10-8-billion-b"
      },
      {
          "authors": [
              "Globe Newswire"
          ],
          "banner_image": "https://www.benzinga.com/next-assets/images/schema-image-default.png",
          "category_within_source": "News",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.139737,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "NEW YORK, Sept. 10, 2024 ( GLOBE NEWSWIRE ) -- Why: Rosen Law Firm, a global investor rights law firm, announces an investigation of potential securities claims on behalf of shareholders of Acadia Healthcare Company, Inc.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.138863",
                  "ticker": "NYT",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.010002"
              },
              {
                  "relevance_score": "0.069697",
                  "ticker": "META",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              },
              {
                  "relevance_score": "0.400265",
                  "ticker": "ACHC",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.033178"
              }
          ],
          "time_published": "20240910T232100",
          "title": "ACADIA HEALTHCARE COMPANY, INC. ANNOUNCEMENT: If You Have Suffered Losses in Acadia Healthcare Company, Inc.  ( NASDAQ: ACHC ) , You Are Encouraged to Contact The Rosen Law Firm About Your Rights - Acadia Healthcare Co  ( NASDAQ:ACHC ) ",
          "topics": [
              {
                  "relevance_score": "0.333333",
                  "topic": "Life Sciences"
              },
              {
                  "relevance_score": "0.744043",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "0.333333",
                  "topic": "Manufacturing"
              },
              {
                  "relevance_score": "0.333333",
                  "topic": "Technology"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/g40806148/acadia-healthcare-company-inc-announcement-if-you-have-suffered-losses-in-acadia-healthcare-compan"
      },
      {
          "authors": [
              "Globe Newswire"
          ],
          "banner_image": "https://ml.globenewswire.com/media/46a37084-e0b3-48fa-b515-02e82ff9d30a/small/kaskela-law-logo1-jpg.jpg",
          "category_within_source": "News",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.230119,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "PHILADELPHIA, Sept. 10, 2024 ( GLOBE NEWSWIRE ) -- Law firm Kaskela Law LLC announces that it is investigating the fairness of the recently announced proposed buyout of PowerSchool Holdings, Inc. PWSC ( \"PowerSchool\" ) stockholders to determine whether the proposed buyout price of $22.80 per ...",
          "ticker_sentiment": [],
          "time_published": "20240910T231455",
          "title": "PowerSchool Holdings, Inc.  ( PWSC )  Shareholder Buyout Investigation Announcement by Kaskela Law LLC: Investors Encouraged to Contact the Firm to Discuss their Legal Rights and Options with Respect to Proposed $22.80 Per Share Buyout Agreement - PowerSchool Holdings  ( NYSE:PWSC ) ",
          "topics": [
              {
                  "relevance_score": "0.214378",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/g40806078/powerschool-holdings-inc-pwsc-shareholder-buyout-investigation-announcement-by-kaskela-law-llc-inv"
      },
      {
          "authors": [
              "Brian Trunzo"
          ],
          "banner_image": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-09/0191ddbf-dc24-735a-81ab-e219299e419a",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Bullish",
          "overall_sentiment_score": 0.400969,
          "source": "Cointelegraph",
          "source_domain": "cointelegraph.com",
          "summary": "As markets continue to evolve and integrate with Web3 - from DeFi to gaming - we're likely to see an explosion of creativity.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.051551",
                  "ticker": "RBLX",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.004988"
              },
              {
                  "relevance_score": "0.051551",
                  "ticker": "CRYPTO:BTC",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.314792"
              }
          ],
          "time_published": "20240910T225950",
          "title": "Prediction markets are the killer blockchain app we've been waiting for",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.310843",
                  "topic": "Blockchain"
              },
              {
                  "relevance_score": "0.161647",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://cointelegraph.com/news/prediction-markets-are-the-killer-blockchain-app-we-ve-been-waiting-for"
      },
      {
          "authors": [
              "Globe Newswire"
          ],
          "banner_image": "https://ml.globenewswire.com/media/46a37084-e0b3-48fa-b515-02e82ff9d30a/small/kaskela-law-logo1-jpg.jpg",
          "category_within_source": "News",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.232633,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "PHILADELPHIA, Sept. 10, 2024 ( GLOBE NEWSWIRE ) -- Law firm Kaskela Law LLC announces that it is investigating the fairness of the recently announced proposed buyout of Thoughtworks Holding, Inc. ( \"Thoughtworks\" ) TWKS stockholders to determine whether the proposed buyout price of $4.40 per ...",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.70749",
                  "ticker": "TWKS",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.395594"
              }
          ],
          "time_published": "20240910T225841",
          "title": "Thoughtworks Holdings, Inc.  ( TWKS )  Shareholder Buyout Investigation Announcement by Kaskela Law LLC: Investors Encouraged to Contact the Firm to Discuss their Legal Rights and Options with Respect to Proposed $4.40 Per Share Buyout Agreement - Thoughtworks Holding  ( NASDAQ:TWKS ) ",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.214378",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/g40805954/thoughtworks-holdings-inc-twks-shareholder-buyout-investigation-announcement-by-kaskela-law-llc-in"
      },
      {
          "authors": [
              "Eric Volkman"
          ],
          "banner_image": "https://g.foolcdn.com/editorial/images/790358/exhausted-person-lying-on-the-ground-after-a-workout.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.089634,
          "source": "Motley Fool",
          "source_domain": "www.fool.com",
          "summary": "No investor likes a recommendation downgrade.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.155451",
                  "ticker": "NKE",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.051624"
              },
              {
                  "relevance_score": "0.155451",
                  "ticker": "BCS",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.044069"
              }
          ],
          "time_published": "20240910T224746",
          "title": "Why Adidas Stock Got Thumped on Tuesday",
          "topics": [
              {
                  "relevance_score": "0.5",
                  "topic": "Finance"
              },
              {
                  "relevance_score": "0.161647",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "0.5",
                  "topic": "Manufacturing"
              }
          ],
          "url": "https://www.fool.com/investing/2024/09/10/why-adidas-stock-got-thumped-on-tuesday/"
      },
      {
          "authors": [],
          "banner_image": null,
          "category_within_source": "Top News",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.077034,
          "source": "CNBC",
          "source_domain": "www.cnbc.com",
          "summary": "A recent slew of streaming deals are showcasing the NFL's push into broadening its fanbase and viewership.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.168884",
                  "ticker": "NFLX",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.040596"
              },
              {
                  "relevance_score": "0.113062",
                  "ticker": "GOOG",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.021073"
              }
          ],
          "time_published": "20240910T224251",
          "title": "Streaming deals are key to future of NFL viewership, fandom",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              }
          ],
          "url": "https://www.cnbc.com/2024/09/10/streaming-deals-are-key-to-future-of-nfl-viewership-fandom.html"
      },
      {
          "authors": [
              "Globe Newswire"
          ],
          "banner_image": "https://ml.globenewswire.com/media/77ceffdf-31cc-415f-9747-efee950af329/small/telix-main-logo-3-png.png",
          "category_within_source": "General",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.119187,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "MELBOURNE, Australia, Sept. 11, 2024 ( GLOBE NEWSWIRE ) -- Telix Pharmaceuticals Limited TLX Telix, the Company ) today announces that primary results from its Phase III ZIRCON1 trial have been published in The Lancet Oncology, reporting that Telix's first-in-class investigational PET2 agent, ...",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.12031",
                  "ticker": "TLPPF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.023197"
              }
          ],
          "time_published": "20240910T223807",
          "title": "'Highly Accurate': Telix's Phase III ZIRCON Trial for Kidney Cancer Imaging Published in The Lancet Oncology",
          "topics": [
              {
                  "relevance_score": "0.495866",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/g40805815/highly-accurate-telixs-phase-iii-zircon-trial-for-kidney-cancer-imaging-published-in-the-lancet-on"
      },
      {
          "authors": [
              "Telix Pharmaceuticals Limited"
          ],
          "banner_image": "https://ml.globenewswire.com/Resource/Download/77ceffdf-31cc-415f-9747-efee950af329",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.128627,
          "source": "GlobeNewswire",
          "source_domain": "www.globenewswire.com",
          "summary": "MELBOURNE, Australia, Sept. 11, 2024 ( GLOBE NEWSWIRE ) -- Telix Pharmaceuticals Limited ( ASX: TLX, Telix, the Company ) today announces that primary results from its Phase III ZIRCON1 trial have been published in The Lancet Oncology, reporting that Telix's first-in-class investigational PET2 ...",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.101154",
                  "ticker": "TLPPF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.033634"
              }
          ],
          "time_published": "20240910T223800",
          "title": "'Highly Accurate': Telix's Phase III ZIRCON Trial for Kidney Cancer Imaging Published in The Lancet Oncology",
          "topics": [
              {
                  "relevance_score": "0.310843",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.globenewswire.com/news-release/2024/09/10/2944182/0/en/Highly-Accurate-Telix-s-Phase-III-ZIRCON-Trial-for-Kidney-Cancer-Imaging-Published-in-The-Lancet-Oncology.html"
      },
      {
          "authors": [
              "Globe Newswire"
          ],
          "banner_image": "https://www.benzinga.com/next-assets/images/schema-image-default.png",
          "category_within_source": "News",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.104075,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "NEW YORK, Sept. 10, 2024 ( GLOBE NEWSWIRE ) -- WHY: Rosen Law Firm, a global investor rights law firm, announces the filing of a class action lawsuit on behalf of purchasers of securities of Agenus Inc. AGEN between January 23, 2023 and July 17, 2024, both dates inclusive ( the \"Class Period\" ...",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.306198",
                  "ticker": "AGEN",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.078924"
              },
              {
                  "relevance_score": "0.062761",
                  "ticker": "META",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              }
          ],
          "time_published": "20240910T223300",
          "title": "ROSEN, A LEADING INVESTOR RIGHTS LAW FIRM, Encourages Agenus Inc. Investors to Secure Counsel Before Important Deadline in Securities Class Action - AGEN - Agenus  ( NASDAQ:AGEN ) ",
          "topics": [
              {
                  "relevance_score": "0.5",
                  "topic": "Life Sciences"
              },
              {
                  "relevance_score": "0.5",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.495866",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/g40805786/rosen-a-leading-investor-rights-law-firm-encourages-agenus-inc-investors-to-secure-counsel-before-"
      },
      {
          "authors": [
              "Andrew Hayward"
          ],
          "banner_image": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2024/09/x-empire-vouchers-gID_7.png",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.088425,
          "source": "Decrypt.co",
          "source_domain": "decrypt.co",
          "summary": "X Empire follows the Notcoin model with NFT vouchers for pre-market token trading, but questions persist around the conversion rate.",
          "ticker_sentiment": [],
          "time_published": "20240910T223014",
          "title": "Elon Musk-Themed Telegram Game 'X Empire' Opens Pre-Market Trading Ahead of Airdrop",
          "topics": [
              {
                  "relevance_score": "0.838487",
                  "topic": "Blockchain"
              },
              {
                  "relevance_score": "0.108179",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://decrypt.co/248807/elon-musk-telegram-game-x-empire-pre-market-trading-airdrop"
      },
      {
          "authors": [
              "Eric Volkman"
          ],
          "banner_image": "https://g.foolcdn.com/editorial/images/790354/finger-about-to-press-a-green-dollar-sign-key-on-a-pc-keyboard.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.266685,
          "source": "Motley Fool",
          "source_domain": "www.fool.com",
          "summary": "The company is benefiting from supplying the right kinds of businesses at the right time.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.509589",
                  "ticker": "MTRX",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.326374"
              }
          ],
          "time_published": "20240910T222417",
          "title": "Why Matrix Service Stock Rocketed 15% Higher on Tuesday",
          "topics": [
              {
                  "relevance_score": "0.961735",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Real Estate & Construction"
              },
              {
                  "relevance_score": "0.796627",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.fool.com/investing/2024/09/10/why-matrix-service-stock-rocketed-15-higher-on-tue/"
      },
      {
          "authors": [
              "PRNewswire"
          ],
          "banner_image": "https://mma.prnewswire.com/media/1589642/BGM_Logo.jpg",
          "category_within_source": "General",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.267584,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "BOSTON, Sept. 10, 2024 /PRNewswire/ -- Boston Globe Media announced the launch of B-Side Sports, a new video-first sports platform designed to captivate New England sports fans through video series, podcasts, and a bi-weekly newsletter distributed on Mondays and Fridays.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.110973",
                  "ticker": "GOOG",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.118692"
              }
          ],
          "time_published": "20240910T221400",
          "title": "Boston Globe Media Launches B-Side Sports with Strategic Partnership alongside Shadow Lion",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/n40805643/boston-globe-media-launches-b-side-sports-with-strategic-partnership-alongside-shadow-lion"
      },
      {
          "authors": [
              "Michael Juliano"
          ],
          "banner_image": "https://cdn.benzinga.com/files/images/story/2024/09/10/BrianMoynihan-BAC--FlickerCCWOrldEconomi.jpeg?width=1200&height=800&fit=crop",
          "category_within_source": "News",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.05509,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "Bank of America Corp BAC CEO Brian Moynihan praised Warren Buffett on Tuesday as an investor in the company, but said he has not asked the legendary investor why he has lowered his position in Bank of America.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.70749",
                  "ticker": "BAC",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.077517"
              },
              {
                  "relevance_score": "0.104683",
                  "ticker": "BRK-A",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.093651"
              }
          ],
          "time_published": "20240910T220722",
          "title": "Bank Of America CEO On Buffett's Share Retreat: 'I Don't Know What Exactly He Is Doing ... We Can't Ask' - Bank of America  ( NYSE:BAC ) , First Trust Nasdaq Bank ETF  ( NASDAQ:FTXO ) ",
          "topics": [
              {
                  "relevance_score": "0.158519",
                  "topic": "Economy - Monetary"
              },
              {
                  "relevance_score": "0.938793",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "0.108179",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Finance"
              }
          ],
          "url": "https://www.benzinga.com/news/24/09/40805571/bank-of-america-ceo-on-buffetts-share-retreat-i-dont-know-what-exactly-he-is-doing-we-cant-ask"
      },
      {
          "authors": [
              "Andrew Throuvalas"
          ],
          "banner_image": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2024/05/bitcoin-defi-gID_7.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.11677,
          "source": "Decrypt.co",
          "source_domain": "decrypt.co",
          "summary": "Fractal stays loyal to Bitcoin's base layer code, allowing BTC to scale while sharing its security and infrastructure.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.886842",
                  "ticker": "CRYPTO:BTC",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.266631"
              },
              {
                  "relevance_score": "0.07887",
                  "ticker": "CRYPTO:ETH",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              }
          ],
          "time_published": "20240910T220241",
          "title": "What Is Fractal? What You Need to Know About the Buzzy Bitcoin Scaler",
          "topics": [
              {
                  "relevance_score": "0.576289",
                  "topic": "Blockchain"
              }
          ],
          "url": "https://decrypt.co/248798/what-is-fractal-buzzy-bitcoin-scaling-network"
      },
      {
          "authors": [
              "Ralph Jennings"
          ],
          "banner_image": "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/9e88f8af-d0bd-4c5d-8747-5a803214bd5e_1f7e49a0.jpg?itok=mey3Hka7&v=1725964232",
          "category_within_source": "Economy",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.106231,
          "source": "South China Morning Post",
          "source_domain": "www.scmp.com",
          "summary": "Latin American countries, such as Chile, Bolivia, Mexico and Peru, are placing extra scrutiny on overseas investment in their lithium industries.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.100168",
                  "ticker": "MCO",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.123507"
              },
              {
                  "relevance_score": "0.033468",
                  "ticker": "SZIHF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              },
              {
                  "relevance_score": "0.033468",
                  "ticker": "GNENY",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.108198"
              },
              {
                  "relevance_score": "0.033468",
                  "ticker": "CICOY",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.074061"
              },
              {
                  "relevance_score": "0.066877",
                  "ticker": "SQM",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.0"
              }
          ],
          "time_published": "20240910T220019",
          "title": "Chinese firms seek to avoid pitfalls in search of lithium in Latin America",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Energy & Transportation"
              },
              {
                  "relevance_score": "0.161647",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.scmp.com/economy/global-economy/article/3277973/chinas-firms-seek-avoid-pitfalls-search-key-ev-metal-latin-america-analysts"
      },
      {
          "authors": [
              "Motley Fool Transcribing"
          ],
          "banner_image": "https://g.foolcdn.com/misc-assets/fool-transcripts-logo.png",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.256849,
          "source": "Motley Fool",
          "source_domain": "www.fool.com",
          "summary": "ASO earnings call for the period ending June 30, 2024.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.004231",
                  "ticker": "BAC",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.181944"
              },
              {
                  "relevance_score": "0.004231",
                  "ticker": "MS",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.099315"
              },
              {
                  "relevance_score": "0.004231",
                  "ticker": "CROX",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.184689"
              },
              {
                  "relevance_score": "0.016921",
                  "ticker": "NKE",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.147059"
              },
              {
                  "relevance_score": "0.02115",
                  "ticker": "ASO",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.061133"
              },
              {
                  "relevance_score": "0.029607",
                  "ticker": "DASH",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.055827"
              },
              {
                  "relevance_score": "0.004231",
                  "ticker": "ASCCF",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.184689"
              },
              {
                  "relevance_score": "0.008461",
                  "ticker": "BIRK",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.160778"
              },
              {
                  "relevance_score": "0.02115",
                  "ticker": "BNXYF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.077306"
              }
          ],
          "time_published": "20240910T220016",
          "title": "Academy Sports And Outdoors  ( ASO )  Q2 2024 Earnings Call Transcript",
          "topics": [
              {
                  "relevance_score": "0.310843",
                  "topic": "Economy - Monetary"
              },
              {
                  "relevance_score": "0.333333",
                  "topic": "Retail & Wholesale"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "0.333333",
                  "topic": "Manufacturing"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.333333",
                  "topic": "Finance"
              }
          ],
          "url": "https://www.fool.com/earnings/call-transcripts/2024/09/10/academy-sports-and-outdoors-aso-q2-2024-earnings-c/"
      },
      {
          "authors": [
              "Canadian National Railway"
          ],
          "banner_image": "https://ml.globenewswire.com/Resource/Download/d8f3f116-ccaf-4c51-af12-154863973974",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.036278,
          "source": "GlobeNewswire",
          "source_domain": "www.globenewswire.com",
          "summary": "Operations have recovered but demand weakness persists in key sectors Operations have recovered but demand weakness persists in key sectors ...",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.054983",
                  "ticker": "FOREX:CAD",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.029001"
              }
          ],
          "time_published": "20240910T220000",
          "title": "CN Operations have Recovered, Company Updates Outlook Following Labor Disruption",
          "topics": [
              {
                  "relevance_score": "0.682689",
                  "topic": "Economy - Monetary"
              },
              {
                  "relevance_score": "0.158519",
                  "topic": "Economy - Fiscal"
              },
              {
                  "relevance_score": "0.158519",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "0.999995",
                  "topic": "Earnings"
              }
          ],
          "url": "https://www.globenewswire.com/news-release/2024/09/10/2944177/0/en/CN-Operations-have-Recovered-Company-Updates-Outlook-Following-Labor-Disruption.html"
      },
      {
          "authors": [
              "Nicolás Jose Rodriguez"
          ],
          "banner_image": "https://cdn.benzinga.com/files/images/story/2024/09/10/AI-Generated-Image.jpeg?width=1200&height=800&fit=crop",
          "category_within_source": "News",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.301674,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "SNDL Inc. SNDL announced on Tuesday that Taranvir \"Tank\" Vander, president of its Liquor Division, is stepping down after two decades of leadership in the liquor industry. Vander, who began his career as a liquor store manager in the early 2000s, is retiring to pursue new opportunities.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.183895",
                  "ticker": "ACB",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.016079"
              },
              {
                  "relevance_score": "0.183895",
                  "ticker": "OGI",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.401973"
              },
              {
                  "relevance_score": "0.183895",
                  "ticker": "TLRY",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.242233"
              },
              {
                  "relevance_score": "0.584328",
                  "ticker": "SNDL",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.278233"
              },
              {
                  "relevance_score": "0.183895",
                  "ticker": "CGC",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.371917"
              },
              {
                  "relevance_score": "0.183895",
                  "ticker": "HITI",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.384266"
              }
          ],
          "time_published": "20240910T214956",
          "title": "Last Call For SNDL's Liquor President: Stock On The Rocks Amid Leadership Changes - SNDL  ( NASDAQ:SNDL ) ",
          "topics": [
              {
                  "relevance_score": "0.5",
                  "topic": "Life Sciences"
              },
              {
                  "relevance_score": "0.5",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.503496",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/markets/cannabis/24/09/40805431/last-call-for-sndls-liquor-president-stock-on-the-rocks-amid-leadership-changes"
      },
      {
          "authors": [
              "PRNewswire"
          ],
          "banner_image": "https://mma.prnewswire.com/media/2502141/Modern_Mattress_Modern_Mattress_Enhances_Guest_Experience_with_I.jpg",
          "category_within_source": "News",
          "overall_sentiment_label": "Bullish",
          "overall_sentiment_score": 0.649874,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "REGINA, SK, Sept. 10, 2024 /CNW/ - Modern Mattress is thrilled to announce its partnership with XSENSOR, a Calgary-based company at the forefront of pressure-sensing technology.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.101154",
                  "ticker": "TSLA",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.508749"
              }
          ],
          "time_published": "20240910T214900",
          "title": "Modern Mattress Enhances Guest Experience with Innovative Sleep Technology",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Manufacturing"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/n40805432/modern-mattress-enhances-guest-experience-with-innovative-sleep-technology"
      },
      {
          "authors": [
              "Eric Volkman"
          ],
          "banner_image": "https://g.foolcdn.com/editorial/images/790351/person-using-a-laptop-and-tablet-simultaneously.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Bullish",
          "overall_sentiment_score": 0.375741,
          "source": "Motley Fool",
          "source_domain": "www.fool.com",
          "summary": "The company will surely benefit from an anticipated AI product rollout.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.791422",
                  "ticker": "MSFT",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.609763"
              }
          ],
          "time_published": "20240910T214537",
          "title": "Why Microsoft Stock Topped the Market Today",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.108179",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.fool.com/investing/2024/09/10/why-microsoft-stock-topped-the-market-today/"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default25.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.205735,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "The latest trading day saw SoFi Technologies, Inc. (SOFI) settling at $7.05, representing a -0.42% change from its previous close.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.517534",
                  "ticker": "SOFI",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.234008"
              }
          ],
          "time_published": "20240910T214523",
          "title": "SoFi Technologies, Inc.  ( SOFI )  Stock Sinks As Market Gains: What You Should Know",
          "topics": [
              {
                  "relevance_score": "0.986564",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Real Estate & Construction"
              },
              {
                  "relevance_score": "0.266143",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334243/sofi-technologies-inc-sofi-stock-sinks-as-market-gains-what-you-should-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default278.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.214274,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "The latest trading day saw Visa (V) settling at $285.34, representing a -0.09% change from its previous close.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.52949",
                  "ticker": "V",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.257938"
              }
          ],
          "time_published": "20240910T214523",
          "title": "Visa  ( V )  Stock Sinks As Market Gains: What You Should Know",
          "topics": [
              {
                  "relevance_score": "0.986564",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.266143",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334244/visa-v-stock-sinks-as-market-gains-what-you-should-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default231.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.240708,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "The latest trading day saw Realty Income Corp. (O) settling at $62.81, representing a -0.08% change from its previous close.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.450165",
                  "ticker": "O",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.185363"
              }
          ],
          "time_published": "20240910T214523",
          "title": "Realty Income Corp.  ( O )  Stock Sinks As Market Gains: What You Should Know",
          "topics": [
              {
                  "relevance_score": "0.95493",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Real Estate & Construction"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334242/realty-income-corp-o-stock-sinks-as-market-gains-what-you-should-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default223.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.165467,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "TSMC (TSM) reachead $162.43 at the closing of the latest trading day, reflecting a -0.22% change compared to its last close.",
          "ticker_sentiment": [],
          "time_published": "20240910T214522",
          "title": "TSMC  ( TSM )  Stock Dips While Market Gains: Key Facts",
          "topics": [
              {
                  "relevance_score": "0.976913",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.266143",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334247/tsmc-tsm-stock-dips-while-market-gains-key-facts"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default132.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.179376,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the latest trading session, Chevron (CVX) closed at $138.23, marking a -1.48% move from the previous day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.592095",
                  "ticker": "CVX",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.298686"
              }
          ],
          "time_published": "20240910T214522",
          "title": "Chevron  ( CVX )  Stock Sinks As Market Gains: What You Should Know",
          "topics": [
              {
                  "relevance_score": "0.95493",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Energy & Transportation"
              },
              {
                  "relevance_score": "0.214378",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334249/chevron-cvx-stock-sinks-as-market-gains-what-you-should-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default308.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.226266,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the latest trading session, IBM (IBM) closed at $205.32, marking a +0.88% move from the previous day.",
          "ticker_sentiment": [],
          "time_published": "20240910T214522",
          "title": "IBM  ( IBM )  Rises Higher Than Market: Key Facts",
          "topics": [
              {
                  "relevance_score": "0.95493",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334245/ibm-ibm-rises-higher-than-market-key-facts"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default66.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.168514,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "Boeing (BA) closed the most recent trading day at $160.07, moving -1.74% from the previous trading session.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.508593",
                  "ticker": "BA",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.156084"
              }
          ],
          "time_published": "20240910T214522",
          "title": "Boeing  ( BA )  Stock Sinks As Market Gains: What You Should Know",
          "topics": [
              {
                  "relevance_score": "0.938793",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.161647",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Manufacturing"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334248/boeing-ba-stock-sinks-as-market-gains-what-you-should-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default236.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.222667,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "Pinterest (PINS) reachead $29.12 at the closing of the latest trading day, reflecting a -0.99% change compared to its last close.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.603594",
                  "ticker": "PINS",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.328739"
              }
          ],
          "time_published": "20240910T214522",
          "title": "Pinterest  ( PINS )  Stock Sinks As Market Gains: Here's Why",
          "topics": [
              {
                  "relevance_score": "0.986564",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.161647",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334246/pinterest-pins-stock-sinks-as-market-gains-heres-why"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default152.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.169715,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the latest trading session, Alphabet (GOOGL) closed at $148.66, marking a -0.03% move from the previous day.",
          "ticker_sentiment": [],
          "time_published": "20240910T214521",
          "title": "Alphabet  ( GOOGL )  Stock Sinks As Market Gains: Here's Why",
          "topics": [
              {
                  "relevance_score": "0.961735",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334253/alphabet-googl-stock-sinks-as-market-gains-heres-why"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default357.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.198196,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "Meta Platforms (META) reachead $504.79 at the closing of the latest trading day, reflecting no change compared to its last close.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.535653",
                  "ticker": "META",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.322034"
              }
          ],
          "time_published": "20240910T214521",
          "title": "Meta Platforms  ( META )  Flat As Market Gains: What You Should Know",
          "topics": [
              {
                  "relevance_score": "0.961735",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334251/meta-platforms-meta-flat-as-market-gains-what-you-should-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default72.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.211569,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the latest trading session, Vertiv Holdings Co. (VRT) closed at $75.47, marking a +1.33% move from the previous day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.582526",
                  "ticker": "VRT",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.320316"
              }
          ],
          "time_published": "20240910T214521",
          "title": "Vertiv Holdings Co.  ( VRT )  Rises Higher Than Market: Key Facts",
          "topics": [
              {
                  "relevance_score": "0.95493",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Manufacturing"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334254/vertiv-holdings-co-vrt-rises-higher-than-market-key-facts"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default175.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.179817,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the closing of the recent trading day, Alphabet Inc. (GOOG) stood at $150.01, denoting a +0.31% change from the preceding trading day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.648164",
                  "ticker": "GOOG",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.301243"
              }
          ],
          "time_published": "20240910T214521",
          "title": "Here's Why Alphabet Inc.  ( GOOG )  Gained But Lagged the Market Today",
          "topics": [
              {
                  "relevance_score": "0.972476",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.365926",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334252/heres-why-alphabet-inc-goog-gained-but-lagged-the-market-today"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default205.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.200605,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "Micron (MU) reachead $86.85 at the closing of the latest trading day, reflecting a +0.67% change compared to its last close.",
          "ticker_sentiment": [],
          "time_published": "20240910T214521",
          "title": "Micron  ( MU )  Beats Stock Market Upswing: What Investors Need to Know",
          "topics": [
              {
                  "relevance_score": "0.928769",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.266143",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334250/micron-mu-beats-stock-market-upswing-what-investors-need-to-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default277.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.133971,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the closing of the recent trading day, Caterpillar (CAT) stood at $334.16, denoting a +0.04% change from the preceding trading day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.592095",
                  "ticker": "CAT",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.18344"
              }
          ],
          "time_published": "20240910T214520",
          "title": "Caterpillar  ( CAT )  Ascends But Remains Behind Market: Some Facts to Note",
          "topics": [
              {
                  "relevance_score": "0.972476",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334255/caterpillar-cat-ascends-but-remains-behind-market-some-facts-to-note"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default171.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.155897,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the latest trading session, PulteGroup (PHM) closed at $132.70, marking a +0.84% move from the previous day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.461006",
                  "ticker": "PHM",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.13111"
              }
          ],
          "time_published": "20240910T214520",
          "title": "PulteGroup  ( PHM )  Laps the Stock Market: Here's Why",
          "topics": [
              {
                  "relevance_score": "0.976913",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Real Estate & Construction"
              },
              {
                  "relevance_score": "0.266143",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334256/pultegroup-phm-laps-the-stock-market-heres-why"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default53.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.20486,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "Arista Networks (ANET) concluded the recent trading session at $326.75, signifying a +0.61% move from its prior day's close.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.526455",
                  "ticker": "ANET",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.354969"
              }
          ],
          "time_published": "20240910T214520",
          "title": "Arista Networks  ( ANET )  Outperforms Broader Market: What You Need to Know",
          "topics": [
              {
                  "relevance_score": "0.938793",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Technology"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334258/arista-networks-anet-outperforms-broader-market-what-you-need-to-know"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default324.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.153847,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the latest trading session, 3M (MMM) closed at $130.09, marking a +1.27% move from the previous day.",
          "ticker_sentiment": [],
          "time_published": "20240910T214520",
          "title": "3M  ( MMM )  Laps the Stock Market: Here's Why",
          "topics": [
              {
                  "relevance_score": "0.961735",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.266143",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334257/3m-mmm-laps-the-stock-market-heres-why"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default98.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.222978,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the most recent trading session, Pfizer (PFE) closed at $29.74, indicating a +1.11% shift from the previous trading day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.549988",
                  "ticker": "PFE",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.281325"
              }
          ],
          "time_published": "20240910T214519",
          "title": "Why Pfizer  ( PFE )  Outpaced the Stock Market Today",
          "topics": [
              {
                  "relevance_score": "0.961735",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Life Sciences"
              },
              {
                  "relevance_score": "0.316726",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334261/why-pfizer-pfe-outpaced-the-stock-market-today"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default273.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.205874,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the closing of the recent trading day, Netflix (NFLX) stood at $673.62, denoting a -0.27% change from the preceding trading day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.590482",
                  "ticker": "NFLX",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.275012"
              }
          ],
          "time_published": "20240910T214519",
          "title": "Netflix  ( NFLX )  Stock Slides as Market Rises: Facts to Know Before You Trade",
          "topics": [
              {
                  "relevance_score": "0.95493",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.266143",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334259/netflix-nflx-stock-slides-as-market-rises-facts-to-know-before-you-trade"
      },
      {
          "authors": [
              "Zacks Equity Research"
          ],
          "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default1.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.190858,
          "source": "Zacks Commentary",
          "source_domain": "www.zacks.com",
          "summary": "In the most recent trading session, Costco (COST) closed at $894.29, indicating a -0.25% shift from the previous trading day.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.55992",
                  "ticker": "COST",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.287915"
              }
          ],
          "time_published": "20240910T214519",
          "title": "Costco  ( COST )  Stock Sinks As Market Gains: Here's Why",
          "topics": [
              {
                  "relevance_score": "0.983783",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "1.0",
                  "topic": "Retail & Wholesale"
              },
              {
                  "relevance_score": "0.214378",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.zacks.com/stock/news/2334260/costco-cost-stock-sinks-as-market-gains-heres-why"
      },
      {
          "authors": [
              "NuLegacy Gold Corporation"
          ],
          "banner_image": "https://ml.globenewswire.com/Resource/Download/75e6bef7-69e1-4828-a7e2-5657bda8f98e",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.121221,
          "source": "GlobeNewswire",
          "source_domain": "www.globenewswire.com",
          "summary": "By regulatory requirement,THIS NEWS RELEASE IS NOT FOR DISTRIBUTION TO U.S. NEWSWIRE SERVICES OR FOR DISSEMINATION IN THE UNITED STATES ...",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.139064",
                  "ticker": "NULGF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.112408"
              },
              {
                  "relevance_score": "0.034933",
                  "ticker": "MALRF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "-0.004918"
              }
          ],
          "time_published": "20240910T214500",
          "title": "NuLegacy Gold Reports Closing of Cost Rationalization Agreement",
          "topics": [
              {
                  "relevance_score": "0.310843",
                  "topic": "Economy - Monetary"
              },
              {
                  "relevance_score": "0.451494",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.globenewswire.com/news-release/2024/09/10/2944174/0/en/NuLegacy-Gold-Reports-Closing-of-Cost-Rationalization-Agreement.html"
      },
      {
          "authors": [
              "Turner Wright"
          ],
          "banner_image": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-09/0191dda5-ca1c-7ee9-aa98-4e5392646a78",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.148912,
          "source": "Cointelegraph",
          "source_domain": "cointelegraph.com",
          "summary": "The CEO of OpenSea reported receiving a Wells notice from the SEC in August, suggesting that the commission could be taking a new regulatory approach to NFTs.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.100308",
                  "ticker": "DKNG",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.049636"
              }
          ],
          "time_published": "20240910T213917",
          "title": "Digital Chamber calls for Congress to address SEC actions against NFTs",
          "topics": [
              {
                  "relevance_score": "0.682689",
                  "topic": "Blockchain"
              },
              {
                  "relevance_score": "0.360215",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://cointelegraph.com/news/digital-chamber-congressional-action-sec-nft-platforms"
      },
      {
          "authors": [
              "Eric Volkman"
          ],
          "banner_image": "https://g.foolcdn.com/editorial/images/790348/kitten-with-its-tongue-out-and-eyes-closed.jpg",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Bullish",
          "overall_sentiment_score": 0.420723,
          "source": "Motley Fool",
          "source_domain": "www.fool.com",
          "summary": "It's an analyst favorite for a clutch of reasons.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.645516",
                  "ticker": "CHWY",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.582586"
              },
              {
                  "relevance_score": "0.288893",
                  "ticker": "GS",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.359825"
              },
              {
                  "relevance_score": "0.146916",
                  "ticker": "MS",
                  "ticker_sentiment_label": "Somewhat-Bullish",
                  "ticker_sentiment_score": "0.252544"
              }
          ],
          "time_published": "20240910T213512",
          "title": "Why Chewy Stock Soared by 6% Today",
          "topics": [
              {
                  "relevance_score": "0.5",
                  "topic": "Retail & Wholesale"
              },
              {
                  "relevance_score": "0.108179",
                  "topic": "Financial Markets"
              },
              {
                  "relevance_score": "0.158519",
                  "topic": "Earnings"
              },
              {
                  "relevance_score": "0.5",
                  "topic": "Finance"
              }
          ],
          "url": "https://www.fool.com/investing/2024/09/10/why-chewy-stock-soared-by-6-today/"
      },
      {
          "authors": [
              "PRNewswire"
          ],
          "banner_image": "https://mma.prnewswire.com/media/2502157/DIMMAK_Runway.jpg",
          "category_within_source": "General",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.319084,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "DIM MAK x TOEI ANIMATION RUNWAY PRESENTATION NEW YORK FASHION WEEK NEW YORK, Sept. 10, 2024 /PRNewswire/ -- Steve Aoki returned to New York Fashion Week this season with DIM MAK x ONE PIECE in partnership with Toei Animation to present a groundbreaking immersive runway experience on September ...",
          "ticker_sentiment": [],
          "time_published": "20240910T213500",
          "title": "STEVE AOKI RETURNS TO NYFW TO PRESENT DIM MAK X ONE PIECE IN PARTNERSHIP WITH TOEI ANIMATION",
          "topics": [
              {
                  "relevance_score": "0.108179",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/pressreleases/24/09/n40805220/steve-aoki-returns-to-nyfw-to-present-dim-mak-x-one-piece-in-partnership-with-toei-animation"
      },
      {
          "authors": [
              "Sienna Senior Living"
          ],
          "banner_image": "https://ml.globenewswire.com/Resource/Download/ac969f39-0111-4903-8faa-0cdee524eb4e",
          "category_within_source": "n/a",
          "overall_sentiment_label": "Neutral",
          "overall_sentiment_score": 0.127548,
          "source": "GlobeNewswire",
          "source_domain": "www.globenewswire.com",
          "summary": "NOT FOR DISSEMINATION TO U.S. NEWS WIRE SERVICES OR FOR DISSEMINATION IN THE UNITED STATES ...",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.148731",
                  "ticker": "LWSCF",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.115001"
              },
              {
                  "relevance_score": "0.074692",
                  "ticker": "MORN",
                  "ticker_sentiment_label": "Neutral",
                  "ticker_sentiment_score": "0.029628"
              }
          ],
          "time_published": "20240910T213300",
          "title": "Sienna Announces Offering of $150 Million Aggregate Principal Amount of 4.436% Series D Senior Unsecured Debentures",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Finance"
              },
              {
                  "relevance_score": "0.310843",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.globenewswire.com/news-release/2024/09/10/2944173/0/en/Sienna-Announces-Offering-of-150-Million-Aggregate-Principal-Amount-of-4-436-Series-D-Senior-Unsecured-Debentures.html"
      },
      {
          "authors": [
              "Benzinga Insights"
          ],
          "banner_image": "https://www.benzinga.com/files/images/story/2024/1726003821_0.png",
          "category_within_source": "Trading",
          "overall_sentiment_label": "Somewhat-Bullish",
          "overall_sentiment_score": 0.238974,
          "source": "Benzinga",
          "source_domain": "www.benzinga.com",
          "summary": "Copart CPRT has outperformed the market over the past 15 years by 10.88% on an annualized basis producing an average annual return of 22.37%. Currently, Copart has a market capitalization of $47.64 billion.",
          "ticker_sentiment": [
              {
                  "relevance_score": "0.95919",
                  "ticker": "CPRT",
                  "ticker_sentiment_label": "Bullish",
                  "ticker_sentiment_score": "0.384695"
              }
          ],
          "time_published": "20240910T213024",
          "title": "$1000 Invested In This Stock 15 Years Ago Would Be Worth $21,000 Today - Copart  ( NASDAQ:CPRT ) ",
          "topics": [
              {
                  "relevance_score": "1.0",
                  "topic": "Retail & Wholesale"
              },
              {
                  "relevance_score": "0.108179",
                  "topic": "Financial Markets"
              }
          ],
          "url": "https://www.benzinga.com/insights/news/24/09/40805144/1000-invested-in-this-stock-15-years-ago-would-be-worth-21-000-today"
      }
  ],
  "items": "50",
  "relevance_score_definition": "0 < x <= 1, with a higher score indicating higher relevance.",
  "sentiment_score_definition": "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish"
}

export const Devon_default = {
    name: "Devon Fennell",
    DOB: '06/09/2001',
    phoneNumber: '229-302-1229',
    userName: "Devon The Investor",
    email: "devon@contact.mail", 
    password: "p@ssw0rd",
    
};
