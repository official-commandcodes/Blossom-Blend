import { API_URL } from '../utils/helper';

// const controller = new AbortController();

export const getAllProduct = async (category = 'all', sortBy = 'all') => {
     const res = await fetch(
          `${API_URL}/api/v1/products?category=${category}&sort=${sortBy}`
     );

     const data = await res.json();

     return data.data;
};

export const getProduct = async (slug) => {
     const res = await fetch(`${API_URL}/api/v1/products/${slug}`);

     const data = await res.json();

     return data.data;
};

export const getSearchProducts = async (query) => {
     const res = await fetch(`${API_URL}/api/v1/products/search?q=${query}`);

     const data = await res.json();

     return data.data;
};

export const addToCart = async (addCart) => {
     const res = await fetch(`${API_URL}/api/v1/users/carts/addToCarts`, {
          method: 'PATCH',
          credentials: 'include',
          headers: {
               'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(addCart),
     });

     const data = await res.json();

     if (data.message) throw new Error(data.message);

     return data;
};

export const removeFromCart = async (productId) => {
     const res = await fetch(`${API_URL}/api/v1/users/carts/removeFromCarts`, {
          method: 'DELETE',
          credentials: 'include',
          headers: {
               'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ id: productId }),
     });

     const data = await res.json();

     if (data.message) throw new Error(data.message);

     return data;
};

export const addToWishlist = async (productId) => {
     const res = await fetch(
          `${API_URL}/api/v1/users/wishlists/addToWishlists`,
          {
               method: 'PATCH',
               credentials: 'include',
               headers: {
                    'Content-type': 'application/json; charset=UTF-8',
               },
               body: JSON.stringify({ id: productId }),
          }
     );

     const data = await res.json();

     if (data.message) throw new Error(data.message);

     return data;
};

export const removeFromWishlist = async (productId) => {
     const res = await fetch(
          `${API_URL}/api/v1/users/wishlists/removeFromWishlists`,
          {
               method: 'DELETE',
               credentials: 'include',
               headers: {
                    'Content-type': 'application/json; charset=UTF-8',
               },
               body: JSON.stringify({ id: productId }),
          }
     );

     const data = await res.json();

     if (data.message) throw new Error(data.message);

     return data;
};
