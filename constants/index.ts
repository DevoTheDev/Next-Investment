interface NavItem {
    route: string
    imgUrl: string
    title: string
}

export const companies = [
    'Apple Inc. (AAPL)',
    'Microsoft Corporation (MSFT)',
    'The Boeing Company (BA)',
    'Caterpillar Inc. (CAT)',
    'Cisco Systems, Inc. (CSCO)',
    'Chevron Corporation (CVX)',
    'The Walt Disney Company (DIS)',
    'Dow Inc. (DOW)',
    'Goldman Sachs Group Inc. (GS)',
    'The Home Depot, Inc. (HD)',
    'IBM (IBM)',
    'Intel Corporation (INTC)',
    'Johnson & Johnson (JNJ)',
    'JPMorgan Chase & Co. (JPM)',
    'Coca-Cola Company (KO)',
    'McDonald\'s Corporation (MCD)',
    '3M Company (MMM)',
    'Merck & Co., Inc. (MRK)',
    'Nike, Inc. (NKE)',
    'Procter & Gamble Co. (PG)',
    'Pfizer Inc. (PFE)',
    'The Travelers Companies, Inc. (TRV)',
    'UnitedHealth Group Incorporated (UNH)',
    'Verizon Communications Inc. (VZ)',
    'Visa Inc. (V)',
    'Walmart Inc. (WMT)',
    'American Express Company (AXP)',
    'Amgen Inc. (AMGN)',
    'Salesforce.com Inc. (CRM)',
    'Honeywell International Inc. (HON)'
  ];
  

export const navigationValues: NavItem[] = [
    {
        route: "/",
        imgUrl: "/public/home.svg",
        title: "Home",
    },
    {
        route: "/invest",
        imgUrl: "/public/money-note.svg",
        title: "Invest",
    },
    {
        route: "/settings",
        imgUrl: "/public/gear.svg",
        title: "Settings",
    }

]