import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useUser } from '../authentication/useUser';

import CartLists from './CartLists';
import CartEmpty from './CartEmpty';

const Carts = () => {
     const navigate = useNavigate();
     const { status, user } = useUser();

     const cartItems = user?.carts?.length;

     return (
          <div className='px-16 py-6 flex flex-col space-y-6'>
               <div className='flex space-x-2 items-center'>
                    <button
                         onClick={() => navigate(-1)}
                         className='w-7 h-7 rounded-full bg-orange-700 text-orange-50 text-[19px] font-bold flex justify-center items-center'
                    >
                         <BsArrowLeft />
                    </button>
                    <h1 className='text-xl font-medium'>Cart ({cartItems})</h1>
               </div>

               {status === 'pending' && <div className='h-[400px]'></div>}

               {cartItems >= 1 && <CartLists carts={user?.carts} />}

               {cartItems === 0 && <CartEmpty />}
          </div>
     );
};

export default Carts;
