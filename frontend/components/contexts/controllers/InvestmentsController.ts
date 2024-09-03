import axios from 'axios';
import { BASE_URL } from './AuthController';

interface InvestmentCreate {
  "stock_symbol": string,
  "amount": string,
}
const createInvestment = async (token: string, investmentData: InvestmentCreate): Promise<any> => {
    const response = await axios.post(`${BASE_URL}/investments`, investmentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
};

const getInvestments = async (token: string): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/investments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
};

const getInvestment = async (token: string, investmentId: string): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/investments/${investmentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
};

const updateInvestment = async (token: string, investmentId: string, investmentData: any): Promise<any> => {
    const response = await axios.put(`${BASE_URL}/investments/${investmentId}`, investmentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
};

const deleteInvestment = async (token: string, investmentId: string): Promise<any> => {
    const response = await axios.delete(`${BASE_URL}/investments/${investmentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
};

export const InvestmentsController = () => {
    return {
        createInvestment,
        getInvestments,
        getInvestment,
        updateInvestment,
        deleteInvestment
    }

}