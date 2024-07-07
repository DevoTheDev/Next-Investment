export interface MonetaryTrend {
    timeline: string;
    amount: number;
    movement: 'positive' | 'negative';
}

export type Company = {
    companyName: string;
    abbreviation: string;
};

export interface Investment {
    label: { title: string, color: string },
    amount: number,
    trend: MonetaryTrend[]
}

export interface User {
    firstName: string,
    lastName: string,
    money: { amount: number, trends?: MonetaryTrend[]},
    email: string,
    password: string,
    investments: Partial<Investment>[],
}