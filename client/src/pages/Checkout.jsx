import { useEffect } from 'react';
import CheckOut from '../features/checkout/CheckOut';

const Checkout = () => {
     useEffect(() => {
          document.title = `Blossom Blend | Checkout`;
     }, []);

     return (
          <div className='flex flex-col gap-2 px-40 py-10'>
               <CheckOut />
          </div>
     );
};

export default Checkout;
