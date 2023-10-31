import { useNavigate } from 'react-router-dom';

import { useUser } from '../authentication/useUser';
import CheckOutItem from './CheckOutItem';
import ActionButton from '../../ui/ActionButton';

const CheckOutItems = () => {
     const { user } = useUser();
     const navigate = useNavigate();

     return (
          <div className='border-[1px] border-gray-300 p-3 rounded-md'>
               <h2 className='text-[20px] font-medium]'>Order Summary</h2>

               <div className='py-6 space-y-4'>
                    {user?.carts.map((cart, i) => (
                         <CheckOutItem
                              key={i + 1}
                              cart={cart.id}
                              qty={cart.quantity}
                         />
                    ))}
               </div>

               <ActionButton onClick={() => navigate('/carts')}>
                    Modify Cart
               </ActionButton>
          </div>
     );
};

export default CheckOutItems;
