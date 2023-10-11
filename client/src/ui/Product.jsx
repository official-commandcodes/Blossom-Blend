import { Link } from 'react-router-dom';
import { AiFillHeart, AiFillStar, AiOutlineHeart } from 'react-icons/ai';

const Product = ({ w }) => {
     const outline = true;

     return (
          <Link className={`bg-gray-50 rounded-md w-[${w}rem]`}>
               <div className='relative h-[300px] w-full '>
                    <img
                         src='https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29zbWV0aWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                         alt='Cosmetics'
                         className='h-full w-full object-cover rounded-t-md'
                    />

                    <span className='absolute top-3 right-3 text-gray-500 text-[18px] bg-orange-50 cursor-pointer rounded-full w-7 h-7 flex justify-center items-center'>
                         {outline ? (
                              <AiOutlineHeart className='text-orange-400' />
                         ) : (
                              <AiFillHeart />
                         )}
                    </span>
               </div>

               <div className='flex justify-between p-2'>
                    <div className='flex flex-col gap-[6px] text-left'>
                         <h2 className='font-bold uppercase text-[13px]'>
                              Cosmetics
                         </h2>
                         <span className='text-xs text-gray-500'>
                              Organic fluid, lotion
                         </span>

                         <div className='text-orange-300 flex gap-[1px] items-center'>
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <span className='text-gray-500 text-xs'>
                                   (12)
                              </span>
                         </div>

                         <button className='px-2 py-1 border-[1px] border-orange-400 text-orange-950 text-xs rounded-full hover:bg-orange-400 transition-all duration-300 hover:text-orange-50'>
                              Add to cart
                         </button>
                    </div>
                    <div className='font-medium text-[18px]'>$99</div>
               </div>
          </Link>
     );
};

export default Product;
