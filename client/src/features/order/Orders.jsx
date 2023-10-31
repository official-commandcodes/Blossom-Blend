import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useUser } from '../authentication/useUser';
import { useOrders } from './useOrders';
import Empty from '../../ui/Empty';
import OrderList from './OrderList';

const Orders = () => {
     const { status: orderStatus, orders } = useOrders();
     const { status: userStatus, user } = useUser();

     if (orderStatus === 'pending' || userStatus === 'pending') {
          return (
               <div className='px-3 py-4 flex flex-col space-y-2 self-end'>
                    <Skeleton count={4} height='60px' />
               </div>
          );
     }

     console.log(orders);
     return (
          <div className='px-3 py-4 flex flex-col space-y-4'>
               <h1 className='text-[20px] font-bold'>All orders</h1>

               <div className='flex flex-col space-y-3'>
                    {orders.length === 0 ? (
                         <Empty type='Order' image='/orders.svg' />
                    ) : (
                         <>
                              <div className='grid grid-cols-8 px-3'>
                                   <div className='col-span-2'>Product</div>
                                   <div>Paid</div>
                                   <div>Qty</div>
                                   <div>Date</div>
                                   <div>Price</div>
                                   <div>Status</div>
                              </div>

                              <ul className='h-96 overflow-y-scroll bg-gray-100 rounded-sm divide-y-[1px] shadow-lg shadow-orange-200/30 p-2 space-y-3'>
                                   {orders.map((order) => (
                                        <OrderList
                                             key={order._id}
                                             order={order.product}
                                             paid={order.paid}
                                             qty={order.quantity}
                                             date={order.createdAt}
                                             writeReview={user.writeReview}
                                             productId={order.product.id}
                                        />
                                   ))}
                              </ul>
                         </>
                    )}
               </div>
          </div>
     );
};

export default Orders;
