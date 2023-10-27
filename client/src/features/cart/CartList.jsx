import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useProduct } from './useProduct';
import { API_URL, formatMoney } from '../../utils/helper';
import { useRemoveFromCart } from '../products/useRemoveFromCart';
import { useUpdateCartItems } from '../products/useUpdateCartItems';

import ActionButton from '../../ui/ActionButton';
import Spinner from '../../ui/Spinner';

const CartList = ({ cart }) => {
     const { status, product } = useProduct(cart.id);
     const { status: removeStatus, removeFromCart } = useRemoveFromCart();
     const { status: updatingStatus, updateCartItems } = useUpdateCartItems();

     if (status === 'pending') {
          return (
               <div>
                    <Skeleton height='100px' />
               </div>
          );
     }

     // REMOVE FROM USER CARTS
     const handleRemoveProduct = () => {
          removeFromCart(cart.id);
     };

     // DECREASE PRODUCT ITEMS
     const handleDecrease = () => {
          updateCartItems({
               id: cart?.id,
               quantity: cart?.quantity - 1,
          });
     };

     // INCREASE PRODUCT ITEMS
     const handleIncrease = () => {
          updateCartItems({
               id: cart?.id,
               quantity: cart?.quantity + 1,
          });
     };

     return (
          <li className='flex justify-between p-2 py-4 rounded-sm'>
               <div className='flex items-center space-x-4'>
                    <img
                         src={`${API_URL}/products/${product?.imageUrl}`}
                         alt={product?.title}
                         className='w-20 h-full object-cover'
                    />

                    <div>
                         <h2 className='font-medium text-[17px]'>
                              {product?.title}
                         </h2>
                         <article className='text-[14px]'>
                              Seller:{' '}
                              <span className='font-thin'>blossomblend</span>
                         </article>
                         <span className='font-thin text-[14px]'>In stock</span>
                    </div>
               </div>

               <div className='flex flex-col space-y-4'>
                    <span className='self-end font-medium'>
                         ₦ {formatMoney(product?.price)}
                    </span>
                    <ActionButton onClick={handleRemoveProduct}>
                         {removeStatus === 'pending' ? (
                              <Spinner w='25' h='20' />
                         ) : (
                              <>
                                   <MdDelete />
                                   Remove
                              </>
                         )}
                    </ActionButton>

                    <div className='flex space-x-3 '>
                         <ActionButton
                              disabled={cart?.quantity === 1}
                              onClick={handleDecrease}
                         >
                              <AiOutlineMinus />
                         </ActionButton>

                         <span>
                              {updatingStatus === 'pending' ? (
                                   <Spinner w='23' h='20' />
                              ) : (
                                   cart?.quantity
                              )}
                         </span>

                         <ActionButton onClick={handleIncrease}>
                              <AiOutlinePlus />
                         </ActionButton>
                    </div>
               </div>
          </li>
     );
};

export default CartList;
