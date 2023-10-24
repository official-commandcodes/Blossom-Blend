import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { API_URL } from '../utils/helper';
import { useAddToCart } from '../features/products/useAddToCart';
import { useUser } from '../features/authentication/useUser';
import { useRemoveFromCart } from '../features/products/useRemoveFromCart';

import Star from './Star';
import Spinner from './Spinner';
import { useAddToWishlist } from '../features/products/useAddToWishlist';
import { useRemoveFromWishlist } from '../features/products/useRemoveFromWishList';

const Product = ({ w, product }) => {
     const { status: addStatus, addToCart } = useAddToCart();
     const { status: removeStatus, removeFromCart } = useRemoveFromCart();
     const { addToWishlist } = useAddToWishlist();
     const { removeFromWishlist } = useRemoveFromWishlist();
     const { user } = useUser();

     const title = `${product?.title.slice(0, 23)}...`;

     const carts = user?.carts?.find((cart) => cart.id === product._id);
     const wishlists = user?.wishlists?.find(
          (wishlist) => wishlist === product._id
     );

     // EVENTS
     const handleAddToCart = () => {
          addToCart({
               id: product._id,
               quantity: 1,
          });
     };

     const handleRemoveCart = () => {
          removeFromCart(product._id);
     };

     const handleAddeAndRemoveFromWishlists = () => {
          if (!wishlists) {
               addToWishlist(product._id);
          } else {
               removeFromWishlist(product._id);
          }
     };

     return (
          <div className={`${w ? 'w-[250px]' : ''} flex flex-col space-y-3`}>
               <div className='relative'>
                    <img
                         src={`${API_URL}/products/${product?.imageUrl}`}
                         alt={product?.title}
                         className='object-cover w-full h-36 rounded-md hover:scale-110 transition-all duration-300 border border-gray-200 hover:shadow-lg hover:shadow-gray-400/50'
                    />

                    <span
                         className='absolute top-2 right-3 text-gray-500 text-[18px] bg-orange-50 cursor-pointer rounded-full w-7 h-7 flex justify-center items-center'
                         onClick={handleAddeAndRemoveFromWishlists}
                    >
                         {!wishlists ? (
                              <AiOutlineHeart className='text-orange-400' />
                         ) : (
                              <AiFillHeart
                                   className={`${
                                        wishlists ? 'text-orange-500' : ''
                                   }`}
                              />
                         )}
                    </span>
               </div>

               <div className='flex justify-between'>
                    <div className='flex flex-col space-y-1'>
                         <Link
                              to={`/products/${product?.slug}`}
                              className='font-light text-[12px] underline'
                         >
                              {title}
                         </Link>
                         <span className='text-xs text-gray-500'>
                              {product?.category}
                         </span>

                         <div className='text-orange-300 flex gap-[1px] items-center'>
                              <Star />
                              <span className='text-xs font-medium text-gray-900'>
                                   &nbsp;
                                   {product?.avgRatings || 0}
                              </span>
                         </div>

                         {/* ADD AND REMOVE CART BUTTONS */}
                         {carts ? (
                              <button
                                   onClick={handleRemoveCart}
                                   className='flex justify-center items-center px-2 py-1 border-[1px] border-orange-600 text-orange-800 text-xs rounded-full hover:bg-orange-700 transition-all duration-300 hover:text-orange-100'
                              >
                                   {removeStatus === 'pending' ? (
                                        <Spinner h='16' w='40' />
                                   ) : (
                                        'Remove from cart'
                                   )}
                              </button>
                         ) : (
                              <button
                                   onClick={handleAddToCart}
                                   className='flex justify-center items-center px-2 py-1 border-[1px] border-orange-600 text-orange-800 text-xs rounded-full hover:bg-orange-700 transition-all duration-300 hover:text-orange-100'
                              >
                                   {addStatus === 'pending' ? (
                                        <Spinner h='16' w='40' />
                                   ) : (
                                        'Add to cart'
                                   )}
                              </button>
                         )}
                    </div>

                    <div className='font-medium text-[14px]'>
                         ${product?.price.toLocaleString()}
                    </div>
               </div>
          </div>
     );
};

export default Product;
