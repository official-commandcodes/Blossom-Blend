import Products from '../features/products/Products';
import Pagination from '../ui/Pagination';
import Popular from '../features/products/Popular';
import FAQS from '../features/faq/FAQS';
import FilterSection from '../ui/FilterSection';
import HeroSection from '../ui/HeroSection';

const Home = () => {
     return (
          <div>
               {/* HERO SECTION */}
               <HeroSection />

               {/* FILTERS & SORT*/}
               <FilterSection />

               {/* PRODUCTS */}
               <Products />

               {/* PAGINATION */}
               <Pagination />

               {/* POPULAR PRODUCTS */}
               <Popular />

               {/* FAQ */}
               <FAQS />
          </div>
     );
};

export default Home;
