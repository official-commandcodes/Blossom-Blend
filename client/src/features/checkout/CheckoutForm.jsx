import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useUser } from '../authentication/useUser';
import { useCheckout } from './useCheckout';
import { useCartTotalAmount } from '../authentication/useTotalCartAmount';
import Spinner from '../../ui/Spinner';

const CheckoutForm = () => {
     const [amount, setAmount] = useState(0);
     const { user } = useUser();
     const { status: checkoutStatus, checkout } = useCheckout();
     const { status: totalStatus, total } = useCartTotalAmount();

     useEffect(() => {
          if (user) {
               total(user.carts, {
                    onSuccess: (data) => {
                         const amount = data.amounts
                              .map((a) => a.amount)
                              .reduce((acc, cur) => acc + cur, 0);
                         setAmount(amount);
                    },
               });
          }
     }, [user, total]);

     const handleSubmit = async (e) => {
          e.preventDefault();

          checkout(user.carts);
     };

     return (
          <div className='border-[1px] border-gray-300 p-3 rounded-md'>
               <form onSubmit={handleSubmit}>
                    <h1>
                         Total: ₦ {'   '}
                         {totalStatus === 'pending' ? (
                              <Skeleton height='18px' width='50px' />
                         ) : (
                              amount
                         )}
                    </h1>
                    <button className='bg-black rounded-md text-white px-10 py-2 mt-6 mb-2 text-[13px]'>
                         {checkoutStatus === 'pending' ? (
                              <Spinner w='25' h='20' />
                         ) : (
                              'Pay now'
                         )}
                    </button>
               </form>
          </div>
     );
};

export default CheckoutForm;
