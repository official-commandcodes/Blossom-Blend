import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ProductDetail_Side_Left from '../features/products/ProductDetail_Side_Left';
import ProductDetail_Side_Right from '../features/products/ProductDetail_Side_Right';
import { useProduct } from '../features/products/useProduct';

const ProductsDetails = () => {
     const { isLoading, product } = useProduct();

     return (
          <div className='grid grid-cols-2 gap-3 px-16 py-10'>
               {isLoading ? (
                    <>
                         <div>
                              <Skeleton count={1} height='300px' />

                              <div className='grid grid-cols-3 gap-2'>
                                   <Skeleton count={1} height='100px' />
                                   <Skeleton count={1} height='100px' />
                                   <Skeleton count={1} height='100px' />
                              </div>
                         </div>
                         <div>
                              <Skeleton count={1} height='400px' />
                         </div>
                    </>
               ) : (
                    <>
                         <ProductDetail_Side_Left image={product.images} />
                         <ProductDetail_Side_Right {...product} />
                    </>
               )}
          </div>
     );
};

export default ProductsDetails;
