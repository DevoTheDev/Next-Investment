import axios from 'axios';

export const BASE_URL = process.env.NEXT_INVESTMENT_API_BASE_URL || 'http://127.0.0.1:5005';

export const authController = () => {
  const registerUser = async (username: string, password: string): Promise<any> => {
    const response = await axios.post(`${BASE_URL}/register`, { username, password });
    return response.data;
  };

  const loginUser = async (username: string, password: string): Promise<any> => {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  };

  return { registerUser, loginUser };
};
