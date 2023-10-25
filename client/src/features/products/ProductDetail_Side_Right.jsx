import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiCartAdd } from 'react-icons/bi';
import { isFriday, isTuesday } from 'date-fns';
import { toast } from 'react-hot-toast';

import { useUser } from '../authentication/useUser';
import { useAddToCart } from './useAddToCart';
import { useRemoveFromCart } from './useRemoveFromCart';
import { useUpdateCartItems } from './useUpdateCartItems';

import Star from '../../ui/Star';
import Spinner from '../../ui/Spinner';
import ActionButton from '../../ui/ActionButton';

const ProductDetail_Side_Right = ({
     id,
     title,
     description,
     ratings,
     discountPercentage,
     discountPrice,
     price,
     priceAfterDiscount,
     stockQuantity,
}) => {
     const { status: userStatus, user } = useUser();
     const { status: addStatus, addToCart } = useAddToCart();
     const { status: removeStatus, removeFromCart } = useRemoveFromCart();
     const { status: updatingStatus, updateCartItems } = useUpdateCartItems();

     const fridayCheck = isFriday(new Date());
     const tuesdayCheck = isTuesday(new Date());

     const includeInCart = user?.carts?.find((cart) => cart.id === id);

     // ADD TO CART IF NOT YET ADDED
     const handleAddToCart = () => {
          if (userStatus === 'success') {
               return addToCart({
                    id,
                    quantity: 1,
               });
          }

          toast.error('please login before attemping any action', {
               className: 'text-[12px]',
          });
     };

     // DECREASE PRODUCT ITEMS
     const handleDecrease = () => {
          if (includeInCart.quantity === 1) {
               return removeFromCart(id);
          }

          updateCartItems({
               id,
               quantity: includeInCart.quantity - 1,
          });
     };

     // INCREASE PRODUCT ITEMS
     const handleIncrease = () => {
          updateCartItems({
               id,
               quantity: includeInCart.quantity + 1,
          });
     };

     return (
          <div className='bg-gray-200 flex flex-col px-6 py-8 space-y-6 divide-y-[1px] divide-gray-300'>
               {/* DESCRIPTION */}
               <div className='flex flex-col space-y-4'>
                    <h1 className='font-bold text-xl '>{title}</h1>
                    <p className='text-xs font-extralight'>{description}</p>

                    <div className='flex items-center space-x-[3px]'>
                         <Star />
                         <Star />
                         <Star />
                         <Star />
                         <Star />
                         <span className='text-gray-600 text-[11px]'>
                              ({ratings.length})
                         </span>
                    </div>
               </div>

               {/* AMOUNT */}
               <div className='flex flex-col space-y-1'>
                    <div className='flex items-center py-2 text-gray-400'>
                         <span
                              className={`font-medium text-[24px] text-gray-800 ${
                                   tuesdayCheck || fridayCheck ? '' : 'hidden'
                              }`}
                         >
                              ₦{priceAfterDiscount.toLocaleString()}
                         </span>

                         <span
                              className={`${
                                   tuesdayCheck || fridayCheck
                                        ? 'font-medium text-[14px] text-orange-800 line-through'
                                        : 'text-[24px] no-underline text-gray-900'
                              }`}
                         >
                              ₦{price.toLocaleString()}
                         </span>

                         <span
                              className={`bg-orange-100 text-orange-500 py-0.5 px-0.5 rounded-sm  text-[15px] ${
                                   tuesdayCheck || fridayCheck
                                        ? 'font-medium'
                                        : 'hidden'
                              }`}
                         >
                              - {discountPercentage}%
                         </span>
                    </div>

                    <p className='text-[14px] text-orange-300'>
                         {stockQuantity <= 5
                              ? 'Few units left'
                              : stockQuantity <= 15
                              ? `${stockQuantity} items left`
                              : 'In stock'}
                    </p>
               </div>

               {/* ITEM NUMBER */}
               <div>
                    {includeInCart ? (
                         <div className='flex flex-col space-y-4 py-4 w-7/12'>
                              <p className='font-light text-[14px]'>
                                   ({includeInCart.quantity} item added)
                              </p>

                              <div className='flex items-center space-x-4 w-40'>
                                   <ActionButton onClick={handleDecrease}>
                                        <AiOutlineMinus />
                                   </ActionButton>

                                   <span>
                                        {addStatus === 'pending' ||
                                        removeStatus === 'pending' ||
                                        updatingStatus === 'pending' ? (
                                             <Spinner w='20' h='20' />
                                        ) : (
                                             includeInCart.quantity
                                        )}
                                   </span>

                                   <ActionButton onClick={handleIncrease}>
                                        <AiOutlinePlus />
                                   </ActionButton>
                              </div>
                         </div>
                    ) : (
                         <ActionButton onClick={handleAddToCart}>
                              {addStatus === 'pending' ? (
                                   <Spinner w='20' h='15' />
                              ) : (
                                   <>
                                        <BiCartAdd className='text-[18px]' />
                                        <span>Add to Cart</span>
                                   </>
                              )}
                         </ActionButton>
                    )}
               </div>
          </div>
     );
};

export default ProductDetail_Side_Right;
