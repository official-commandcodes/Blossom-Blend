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

export const loginGoogle = async (credential) => {
     const res = await fetch(`${API_URL}/api/v1/users/login`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(credential),
     });

     const data = await res.json();

     if (data.err) throw new Error(data.err.message);

     return data;
};

export const logout = async () => {
     const res = await fetch(`${API_URL}/api/v1/users/logout`, {
          credentials: 'include',
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

     if (data.status === 'fail') throw new Error(data.err);

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
     try {
          const res = await fetch(`${API_URL}/api/v1/users/updateData`, {
               method: 'PATCH',
               mode: 'cors',
               credentials: 'include',
               body: formData,
          });

          const data = await res.json();

          return data;
     } catch (err) {
          console.log(err);
     }
};

export const updatePassword = async (email) => {
     try {
          const res = await fetch(`${API_URL}/api/v1/users/forgotpassword`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               credentials: 'include',
               body: JSON.stringify(email),
          });

          const data = await res.json();

          return data;
     } catch (err) {
          throw new Error(err);
     }
};

export const updateForgotPassword = async (email) => {
     try {
          const res = await fetch(`${API_URL}/api/v1/users/forgotpassword`, {
               method: 'PATCH',
               headers: {
                    'Content-Type': 'application/json',
               },
               credentials: 'include',
               body: JSON.stringify(email),
          });

          const data = await res.json();

          return data;
     } catch (err) {
          throw new Error(err);
     }
};

export const checkParameters = async (verifyData) => {
     try {
          const res = await fetch(
               `${API_URL}/api/v1/users/forgot-password/verifyParams`,
               {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(verifyData),
               }
          );

          const data = await res.json();

          if (data.err) {
               throw new Error(data.err);
          }

          return data;
     } catch (err) {
          throw new Error(err);
     }
};

export const updatePasswordRoute = async (form) => {
     try {
          const res = await fetch(
               `${API_URL}/api/v1/users/forgot-password/reset`,
               {
                    method: 'PATCH',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(form),
               }
          );

          const data = await res.json();

          return data;
     } catch (err) {
          throw new Error(err);
     }
};
