import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import CartLists from '../features/cart/CartLists';
import CartSummary from '../features/cart/CartSummary';

const Cart = () => {
     const navigate = useNavigate();

     return (
          <div className='px-16 py-6 flex flex-col gap-6'>
               <div className='flex gap-2 items-center'>
                    <button
                         onClick={() => navigate(-1)}
                         className='w-7 h-7 rounded-full bg-orange-700 text-orange-50 text-[19px] font-bold flex justify-center items-center'
                    >
                         <BsArrowLeft />
                    </button>
                    <h1 className='text-xl font-medium'>Your Cart (7)</h1>
               </div>

               <CartLists />

               <div className='grid grid-rows-2 justify-items-end'>
                    <CartSummary button='check' />
               </div>
          </div>
     );
};

export default Cart;
