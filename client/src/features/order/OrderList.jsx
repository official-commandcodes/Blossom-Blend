import { format } from 'date-fns';
import { API_URL } from '../../utils/helper';

const OrderList = ({ order, paid, qty, date }) => {
     return (
          <li className='grid grid-cols-8 text-xs items-center pt-2'>
               <div className='flex items-center col-span-2 space-x-2'>
                    <img
                         src={`${API_URL}/products/${order.imageUrl}`}
                         alt=''
                         className='w-16 h-16 object-cover'
                    />
                    <h2 className='font-medium text-[14px]'>
                         {`${order.title.slice(0, 10)} ...`}
                    </h2>
               </div>

               <div className='text-[13px]'>
                    {paid && (
                         <img
                              src='/mark.png'
                              alt='Paid Mark'
                              className='w-6 h-6 text-orange-300'
                         />
                    )}
               </div>

               <div>{qty}</div>
               <div>{format(new Date(date), 'MMM d, yyyy')}</div>
               <div>$4000</div>

               <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                    Completed
               </span>
          </li>
     );
};

export default OrderList;
