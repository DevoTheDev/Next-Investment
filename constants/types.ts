
export type Company = {
    companyName: string;
    symbol: string;
    color?: string;
};

export interface Investment {
    company: Partial<Company>,
    amount: number,
}

export interface User {
    firstName: string,
    lastName: string,
    money: number,
    email: string,
    password: string,
    investments: Partial<Investment>[],
}