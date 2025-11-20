import axios from 'axios';
const API = import.meta.env.VITE_API_URL;
const user = axios.create (
    {
        baseURL: API,
        headers: {
            "Content-Type": "application/json",
        },
    }
);

export const registerUser = async (userData) => {
    const response = await user.post ('/register', userData);
    return response.data;