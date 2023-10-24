import { API_URL } from '../utils/helper';

export const signup = async (newUser) => {
     const res = await fetch(`${API_URL}/api/v1/users/signup`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(newUser),
     });

     const data = await res.json();

     if (data.err) throw new Error(data.err.message);

     return data;
};

export const login = async (loginData) => {
     const res = await fetch(`${API_URL}/api/v1/users/login`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(loginData),
     });

     const data = await res.json();

     if (data.err) throw new Error(data.err.message);

     return data;
};

export const verifyEmail = async ({ userId, token }) => {
     const res = await fetch(
          `${API_URL}/api/v1/users/validate/${userId}/${token}`,
          {
               method: 'PATCH',
               headers: {
                    'Content-Type': 'application/json',
               },
          }
     );

     const data = await res.json();

     if (data.err) throw new Error(data.err.message);

     return data;
};

export const getLoggedInUser = async () => {
     const res = await fetch(`${API_URL}/api/v1/users/getUser`, {
          headers: {
               'Content-Type': 'application/json',
          },
          credentials: 'include',
     });

     const data = await res.json();

     if (data.err) throw new Error(data.err.message);

     return data.user;
};
