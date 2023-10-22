import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiCartAdd } from 'react-icons/bi';
import { isFriday } from 'date-fns';
import Star from '../../ui/Star';
import Button from '../../ui/Button';

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
     const fridayCheck = isFriday(new Date());

     const addCart = true;

     const handleAddToCart = () => {
          console.log(id);
     };

     return (
          <div className='bg-gray-200 flex flex-col px-6 py-8 gap-6 divide-y-[1px] divide-gray-300'>
               {/* DESCRIPTION */}
               <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl '>{title}</h1>
                    <p className='text-xs font-extralight'>{description}</p>

                    <div className='flex items-center gap-[2px]'>
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
               <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                         <div className='flex items-center gap-3 py-2 text-gray-400'>
                              {fridayCheck ? (
                                   <span className='font-medium text-[24px] text-gray-800'>
                                        ₦{priceAfterDiscount.toLocaleString()}
                                   </span>
                              ) : (
                                   ''
                              )}

                              <span
                                   className={`line-through ${
                                        !fridayCheck
                                             ? 'font-medium text-[24px] text-gray-800 no-underline'
                                             : ''
                                   }`}
                              >
                                   ₦{price.toLocaleString()}
                              </span>

                              {fridayCheck ? (
                                   <span className='bg-orange-50 text-orange-300 py-1 px-2 rounded-sm'>
                                        {discountPercentage}%
                                   </span>
                              ) : (
                                   ''
                              )}
                         </div>

                         <p className='text-[14px] text-orange-300'>
                              {stockQuantity <= 5
                                   ? 'Few units left'
                                   : stockQuantity <= 15
                                   ? `${stockQuantity} items left`
                                   : 'In stock'}
                         </p>
                    </div>
               </div>

               {/* ITEM NUMBER */}
               {!addCart ? (
                    <div className='flex flex-col gap-3 py-2'>
                         <p>(1 item added)</p>

                         <div className='flex items-center gap-5'>
                              <Button>
                                   <AiOutlineMinus />
                              </Button>

                              <span>1</span>

                              <Button>
                                   <AiOutlinePlus />
                              </Button>
                         </div>
                    </div>
               ) : (
                    <Button onClick={handleAddToCart}>
                         <BiCartAdd className='text-[18px]' />
                         Add to Cart
                    </Button>
               )}
          </div>
     );
};

export default ProductDetail_Side_Right;
