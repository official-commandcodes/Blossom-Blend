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

     if (data.err) throw new Error(data.err);

     return data.user;
};

export const getTotalAmount = async (items) => {
     const res = await fetch(`${API_URL}/api/v1/users/totalAmount`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(items),
     });

     const data = await res.json();

     return data;
};

export const updateUser = async (formData) => {
     const res = await fetch(`${API_URL}/api/v1/users/updateData`, {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          body: formData,
     });

     const data = await res.json();

     return data;
};

// export const updateUserPassword = async (info) => {
//      const res = await fetch(`${API_URL}/api/v1/users/updatePassword`, {
//           method: 'POST',
//           credentials: 'include',
//           body: formData,
//      });

//      const data = await res.json();

//      return data;
// };

// export const getMe = async () => {
//      const res = await fetch(`${API_URL}/api/v1/users/`, {
//           method: 'POST',
//           credentials: 'include',
//           body: formData,
//      });

//      const data = await res.json();

//      return data;
// };
