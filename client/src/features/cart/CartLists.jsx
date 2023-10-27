import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useUser } from '../authentication/useUser';
import { useCartTotalAmount } from '../authentication/useTotalCartAmount';

import ActionButton from '../../ui/ActionButton';
import { formatMoney } from '../../utils/helper';
import CartList from './CartList';

const CartLists = ({ carts }) => {
     const [amount, setAmount] = useState(0);
     const { user } = useUser();
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

     return (
          <section className='grid grid-cols-4 px-2 mx-4 space-x-3'>
               <ul className='col-span-3 bg-gray-50 py-4 divide-y-[1px] px-6'>
                    {carts.map((cart) => (
                         <CartList cart={cart} key={cart._id} />
                    ))}
               </ul>

               <div className='col-span-1 bg-gray-50 p-2 h-[200px] rounded-md flex flex-col divide-y-[1px]'>
                    <h1 className='font-medium text-[15px] uppercase py-1'>
                         cart summary
                    </h1>

                    <div className='flex justify-between py-3'>
                         <article className='flex flex-col space-y-2'>
                              <span className='font-[13px]'>Subtotal</span>
                              <p className='font-light text-[12px]'>
                                   Delivery fee not included yet.
                              </p>
                         </article>

                         <h3>
                              {totalStatus === 'pending' ? (
                                   <Skeleton height='18px' width='60px' />
                              ) : (
                                   `₦ ${formatMoney(amount)}`
                              )}
                         </h3>
                    </div>

                    <Link to='/checkout/payment' className='pt-6'>
                         <ActionButton>
                              checkout (₦ {formatMoney(amount)})
                         </ActionButton>
                    </Link>
               </div>
          </section>
     );
};

export default CartLists;
