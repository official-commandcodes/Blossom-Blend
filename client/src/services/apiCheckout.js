import { API_URL } from '../utils/helper';

export const checkout = async (products) => {
     const res = await fetch(`${API_URL}/api/v1/orders/checkout-session`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },

          credentials: 'include',
          body: JSON.stringify(products),
     });

     const data = await res.json();

     return data.session;
};
