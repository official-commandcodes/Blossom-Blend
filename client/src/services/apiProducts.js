import axios from 'axios';
import { API_URL } from '../utils/helper';

export const getAllProduct = async (category, sortBy) => {
     try {
          const res = await axios.get(
               `${API_URL}/api/v1/products?category=${category}&sort=${sortBy}`
          );

          const data = res.data.data;

          return data;
     } catch (err) {
          throw new Error(err);
     }
};
