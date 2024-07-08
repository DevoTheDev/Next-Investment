import { Company } from "@/constants/types";

export function parseCompanies(companies: string[]): Company[] {
    return companies.map(company => {
        const match = company.match(/^(.*) \((.*)\)$/);
        if (match) {
            return {
                companyName: match[1].trim(),
                symbol: match[2].trim()
            };
        }
        throw new Error(`Invalid company string: ${company}`);
    });
}

export const roundToTwoDecimals = (value: string) => {
    const numberValue = parseFloat(value);
    return numberValue.toFixed(2);
  };