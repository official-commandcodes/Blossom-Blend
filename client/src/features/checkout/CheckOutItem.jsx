import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { API_URL } from '../../utils/helper';
import { useProduct } from '../cart/useProduct';

const CheckOutItem = ({ cart, qty }) => {
     const { status, product } = useProduct(cart);

     if (status === 'pending') {
          return <Skeleton height='100px' />;
     }

     return (
          <div className='px-4 py-3 flex border-[1px] space-x-3 border-gray-300 rounded-md'>
               <img
                    src={`${API_URL}/products/${product.imageUrl}`}
                    alt={product.title}
                    className='w-24 h-24 object-cover'
               />

               <div className='flex flex-col space-y-3'>
                    <h5 className='font-medium text-[16px]'>{product.title}</h5>

                    <p className='font-light text-[14px]'>
                         QTY: <span>{qty}</span>
                    </p>

                    <p className='font-light text-[14px]'>
                         Price: <span>₦ {product.price}</span>
                    </p>
               </div>
          </div>
     );
};

export default CheckOutItem;
