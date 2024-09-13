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
  
  const handleCreateInvestment = async (token: string, investmentData: any) => {
    try {
      const response = await createInvestment(token, investmentData);
      console.log('Investment created successfully:', response);
    } catch (error) {
      console.error('Failed to create investment:', error);
    }
  };

  const handleGetInvestments = async (token: string) => {
    try {
      const response = await getInvestments(token);
      console.log('Investments retrieved successfully:', response);
    } catch (error) {
      console.error('Failed to retrieve investments:', error);
    }
  };

  const handleGetInvestment = async (token: string, investmentId: string) => {
    try {
      const response = await getInvestment(token, investmentId);
      console.log('Investment retrieved successfully:', response);
    } catch (error) {
      console.error('Failed to retrieve investment:', error);
    }
  };

  const handleUpdateInvestment = async (token: string, investmentId: string, investmentData: any) => {
    try {
      const response = await updateInvestment(token, investmentId, investmentData);
      console.log('Investment updated successfully:', response);
    } catch (error) {
      console.error('Failed to update investment:', error);
    }
  };

  const handleDeleteInvestment = async (token: string, investmentId: string) => {
    try {
      const response = await deleteInvestment(token, investmentId);
      console.log('Investment deleted successfully:', response);
    } catch (error) {
      console.error('Failed to delete investment:', error);
    }
  };

  return {
    createInvestment: handleCreateInvestment,
    getInvestments: handleGetInvestments,
    getInvestment: handleGetInvestment,
    updateInvestment: handleUpdateInvestment,
    deleteInvestment: handleDeleteInvestment,
  }

}