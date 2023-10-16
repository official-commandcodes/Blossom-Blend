import Star from '../../ui/Star';
import QuantityButton from '../../ui/QuantityButton';
import { Link } from 'react-router-dom';

const ProductDetail_Side_Right = () => {
     return (
          <div className='bg-gray-200 flex flex-col justify-between gap-3 px-6 py-8'>
               {/* DESCRIPTION */}
               <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-2xl '>
                         La Mer Crème de la Mer.
                    </h1>
                    <p className='text-xs font-extralight'>
                         La Mer Crème de la Mer is a renowned luxury skincare
                         product celebrated for its exceptional moisturizing
                         properties. Infused with the brand&apos;s signature
                         Miracle Broth™, this cream is crafted to deeply nourish
                         and rejuvenate the skin. Its exquisite formulation and
                         silky texture make it a coveted choice for those
                         seeking a premium skincare experience.
                    </p>

                    <div className='flex items-center gap-[2px]'>
                         <Star />
                         <Star />
                         <Star />
                         <Star />
                         <Star />
                         <span className='text-gray-600 text-[11px]'>
                              (978)
                         </span>
                    </div>
               </div>

               {/* AMOUNT */}
               <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-bold'>Amount</h2>

                    <div className='flex gap-2 items-center'>
                         <h3 className='font-bold text-4xl'>$500</h3>

                         <span className='line-through self-end justify-start text-[13px]'>
                              $200
                         </span>

                         <span className='px-2 py-1 bg-red-400 rounded-full text-[11px] ml-6 text-gray-100'>
                              75% off
                         </span>
                    </div>
               </div>

               {/* ITEM NUMBER */}
               <QuantityButton />

               {/* CAT BUTTONS */}
               <div className='flex gap-7'>
                    <Link
                         to='/checkout/1'
                         className='w-32 h-9 text-orange-950 text-[15px] bg-orange-800 rounded-full hover:bg-transparent hover:border-[1px] hover:border-orange-900 transition-all duration-300 flex justify-center items-center'
                    >
                         Buy Now
                    </Link>
                    <button className='w-32 h-9 text-orange-950 text-[15px] border-[1px] rounded-full border-orange-900 hover:bg-orange-900 hover:border-none transition-all duration-300'>
                         Add to Cart
                    </button>
               </div>
          </div>
     );
};

export default ProductDetail_Side_Right;
