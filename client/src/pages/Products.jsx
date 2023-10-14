import Products from '../features/products/Products';
import FilterSection from '../ui/FilterSection';
import Pagination from '../ui/Pagination';

const ProductsPage = () => {
     return (
          <div>
               <FilterSection />

               <Products title='' />

               <Pagination />
          </div>
     );
};

export default ProductsPage;
