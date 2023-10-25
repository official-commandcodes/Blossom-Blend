import { useContext } from 'react';
import ActionButton from '../../ui/ActionButton';
import { formatMoney } from '../../utils/helper';
import CartList from './CartList';
import { CartTotalContext } from '../../context/CartTotal';

const CartLists = ({ carts }) => {
     const { sum } = useContext(CartTotalContext);

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

                         <h3>₦ {formatMoney(sum)}</h3>
                    </div>

                    <div className='pt-6'>
                         <ActionButton>
                              checkout (₦ {formatMoney(sum)})
                         </ActionButton>
                    </div>
               </div>
          </section>
     );
};

export default CartLists;
