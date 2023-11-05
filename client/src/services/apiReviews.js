import { API_URL } from '../utils/helper';

export const getReview = async (id) => {
     try {
          const res = await fetch(`${API_URL}/api/v1/reviews/${id}`, {
               credentials: 'include',
               headers: {
                    'Content-Type': 'application',
               },
          });

          const data = await res.json();

          return data.data;
     } catch (err) {
          throw new Error(err);
     }
};

export const createReview = async (newReview) => {
     try {
          const res = await fetch(`${API_URL}/api/v1/reviews`, {
               method: 'POST',
               credentials: 'include',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(newReview),
          });

          const data = await res.json();

          return data.data;
     } catch (err) {
          throw new Error(err);
     }
};
