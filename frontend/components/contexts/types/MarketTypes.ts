// - [ Market Status Types ] -

export interface Market {
    current_status: string;
    local_close: string;
    local_open: string;
    market_type: string;
    notes: string;
    primary_exchanges: string;
    region: string;
  }
  
export interface GlobalMarketStatus {
    endpoint: string;
    markets: Market[];
}

// - [ Market News and Sentiments Types ] -

// Interface for Ticker Sentiment
export interface TickerSentiment {
  relevance_score: string;
  ticker: string;
  ticker_sentiment_label: string;
  ticker_sentiment_score: string;
}

// Interface for Topics
export interface Topic {
  relevance_score: string;
  topic: string;
}

// Interface for each News Feed Item
export interface NewsFeedItem {
  authors: string[];                    // List of author names
  banner_image: string | null;          // URL to banner image, can be null
  category_within_source: string;       // Category (e.g. "Investing", "n/a")
  overall_sentiment_label: string;      // Overall sentiment (e.g. "Neutral", "Somewhat-Bullish")
  overall_sentiment_score: number;      // Sentiment score (e.g. -0.035838)
  source: string;                       // Source name (e.g. "CNBC")
  source_domain: string;                // Domain name (e.g. "www.cnbc.com")
  summary: string;                      // Summary of the article
  ticker_sentiment: TickerSentiment[];  // Array of ticker sentiment data
  time_published: string;               // Time of publication (e.g. "20240910T233553")
  title: string;                        // Title of the article
  topics: Topic[];                      // Array of topics
  url: string;                          // URL to the full article
  [key: string]: any
}

// Interface for the root structure of News Sentiments
export interface NewsSentiments {
  feed: NewsFeedItem[];                 // Array of news feed items
}