import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useProducts } from './useProducts';
import Product from '../../ui/Product';

const Popular = () => {
     const { isLoading, products } = useProducts();

     const popular = products?.filter((product) => product.avgRatings >= 3.5);

     return (
          <section className='px-16 py-8 border-t-[1px] flex flex-col gap-2 border-gray-300'>
               <h1 className='font-medium text-2xl'>Popular Products</h1>

               <div className='grid grid-flow-col gap-x-4 py-3 px-4 mx-6 overflow-x-auto overflow-y-hidden'>
                    {isLoading &&
                         Array.from({ length: 6 }, (_, i) => (
                              <div key={i + 1}>
                                   <Skeleton className='h-36' />
                                   <Skeleton count={4} height='3' />
                              </div>
                         ))}

                    {!isLoading &&
                         popular.map((product) => (
                              <Product
                                   key={product._id}
                                   w={250}
                                   product={product}
                              />
                         ))}
               </div>
          </section>
     );
};

export default Popular;
