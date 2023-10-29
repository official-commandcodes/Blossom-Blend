import { useEffect } from 'react';
import Carts from '../features/cart/Carts';

const Cart = () => {
     useEffect(() => {
          document.title = `Blossom Blend | Carts`;
     }, []);

     return <Carts />;
};

export default Cart;
