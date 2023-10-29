import { API_URL } from '../utils/helper';

export const getAllOrders = async () => {
     const res = await fetch(`${API_URL}/api/v1/orders`, {
          credentials: 'include',
          headers: {
               'Content-Type': 'application/json',
          },
     });

     const data = await res.json();

     return data.data;
};
