// 'Full' returns the past 20+ years of data, 'Compact' returns the last 20 entries.
type OutputSizes = "compact" | "full"

type Functions = 
"TIME_SERIES_INTRADAY" |
"TIME_SERIES_DAILY" |
"TIME_SERIES_DAILY_ADJUSTED" |
"TIME_SERIES_WEEKLY" |
"TIME_SERIES_WEEKLY_ADJUSTED" |
"TIME_SERIES_MONTHLY" |
"TIME_SERIES_MONTHLY_ADJUSTED" |
"GLOBAL_QUOTE" |
"SYMBOL_SEARCH" |
"MARKET_STATUS" |
"REALTIME_OPTIONS" |
"HISTORICAL_OPTIONS" |
"NEWS_SENTIMENT" |
"TOP_GAINERS_LOSERS" |
"ANALYTICS_FIXED_WINDOW" |
"" |
"" |
""

type Options = 
"time_from" |
"time_to" |
"sort" |
"limit" |
""

type Topics =
"blockchain" |
"earnings" |
"ipo" |
"mergers_and_acquisitions" |
"financial_markets" |
"economy_fiscal" |
"economy_monetary" |
"economy_macro" |
"energy_transportation" |
"finance" |
"life_sciences" |
"manufacturing" |
"real_estate" |
"retail_wholesale" |
"technology" |
"" |
"" |
"" |
"" |
"" |
""