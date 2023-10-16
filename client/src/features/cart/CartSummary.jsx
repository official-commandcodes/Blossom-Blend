import { Link } from 'react-router-dom';

const CartSummary = ({ button }) => {
     return (
          <>
               <ul>
                    <li className='border-b-[1px] border-b-gray-300 flex justify-between items-center py-2'>
                         <span className='font-medium text-[17px]'>
                              Subtotal:
                         </span>
                         <span className='font-thin text-[15px]'>$1200.90</span>
                    </li>

                    <li className='border-b-[1px] border-b-gray-300 flex justify-between items-center py-2'>
                         <span className='font-medium text-[17px]'>
                              Sales Tax:
                         </span>
                         <span className='font-thin text-[15px]'>$102.00</span>
                    </li>

                    <li className='border-b-[1px] border-b-gray-300 flex justify-between items-center py-2'>
                         <span className='font-medium text-[17px]'>
                              Grand Total:
                         </span>
                         <span className='font-thin text-[15px]'>$1200.90</span>
                    </li>
               </ul>

               <div className='py-6 flex flex-col gap-4'>
                    <p className='text-[14px] font-light italic'>
                         Congrats, you are eligible for free shipping 🚐
                    </p>

                    {button && (
                         <Link
                              to='/checkout/1'
                              className='w-40 h-10 text-[14px] font-medium rounded-md bg-orange-700 text-orange-100 hover:bg-orange-800 transition-all duration-300 flex justify-center items-center'
                         >
                              Check out
                         </Link>
                    )}
               </div>
          </>
     );
};

export default CartSummary;
