import ProductDetail_Side_Left from '../features/products/ProductDetail_Side_Left';
import ProductDetail_Side_Right from '../features/products/ProductDetail_Side_Right';

const ProductsDetails = () => {
     return (
          <div className='grid grid-cols-2 gap-3 px-16 py-10'>
               <ProductDetail_Side_Left />
               <ProductDetail_Side_Right />
          </div>
     );
};

export default ProductsDetails;
