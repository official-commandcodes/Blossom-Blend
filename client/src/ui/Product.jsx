import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Star from './Star';

const Product = ({ w }) => {
     const outline = true;

     return (
          <div
               className={`${w ? 'w-[250px]' : ''} flex flex-col gap-2`}
               to='/products/1'
          >
               <div className='relative'>
                    <img
                         src='/markup-1.png'
                         alt='Cosmetics'
                         className='object-cover w-full h-36 rounded-md hover:scale-110 transition-all duration-300 border border-gray-200 hover:shadow-lg hover:shadow-gray-400/50'
                    />

                    <span className='absolute top-2 right-3 text-gray-500 text-[18px] bg-orange-50 cursor-pointer rounded-full w-7 h-7 flex justify-center items-center'>
                         {outline ? (
                              <AiOutlineHeart className='text-orange-400' />
                         ) : (
                              <AiFillHeart />
                         )}
                    </span>
               </div>

               <div className='flex justify-between'>
                    <div className='flex flex-col gap-[6px]'>
                         <Link
                              to='/products/1'
                              className='font-medium uppercase text-[14px] underline'
                         >
                              Cosmetics
                         </Link>
                         <span className='text-xs text-gray-500'>
                              Organic fluid, lotion
                         </span>

                         <div className='text-orange-300 flex gap-[1px] items-center'>
                              <Star />
                              <span className='text-xs font-medium text-gray-900'>
                                   4
                              </span>
                         </div>

                         <button className='px-2 py-1 border-[1px] border-orange-800 text-orange-950 text-xs rounded-full hover:bg-orange-700 transition-all duration-300 hover:text-orange-100'>
                              Add to cart
                         </button>
                    </div>

                    <div className='font-medium text-[18px]'>$99</div>
               </div>
          </div>
     );
};

export default Product;
