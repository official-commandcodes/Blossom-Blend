import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiCartAdd } from 'react-icons/bi';
import { isFriday, isTuesday } from 'date-fns';
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
     const tuesdayCheck = isTuesday(new Date());

     const addCart = true;

     const handleAddToCart = () => {
          console.log(id);
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
               <div className='flex flex-col gap-1'>
                    <div className='flex items-center space-x-3 py-2 text-gray-400'>
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
