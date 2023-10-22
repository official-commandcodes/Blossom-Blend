import axios from 'axios';
import { API_URL } from '../utils/helper';

// const controller = new AbortController();

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

export const getProduct = async (slug) => {
     try {
          const res = await axios.get(`${API_URL}/api/v1/products/${slug}`);

          const data = res.data.data;

          return data;
     } catch (err) {
          throw new Error(err);
     }
};

export const getSearchProducts = async (query) => {
     try {
          // const signal = controller.signal;
          const res = await axios.get(
               `${API_URL}/api/v1/products/search?q=${query}`
          );

          const data = res.data.data;

          // controller.abort();

          return data;
     } catch (err) {
          throw new Error(err);
     }
};

export const addProductToCart = async (id) => {
     try {
          // const signal = controller.signal;
          const res = await axios.get(`${API_URL}/api/v1/products/addToCart`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({ id }),
          });

          const data = res.data.data;

          // controller.abort();

          return data;
     } catch (err) {
          throw new Error(err);
     }
};
