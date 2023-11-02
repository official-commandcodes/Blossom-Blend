import Products from '../features/products/Products';
import Pagination from '../ui/Pagination';
import Popular from '../features/products/Popular';
import FAQS from '../features/faq/FAQS';
import FilterSection from '../ui/FilterSection';
import HeroSection from '../ui/HeroSection';
import { useEffect } from 'react';

const Home = () => {
     useEffect(() => {
          document.title = 'Blossom Blend | Homepage';
     }, []);

     return (
          <div>
               {/* HERO SECTION */}
               <HeroSection />

               {/* FILTERS & SORT*/}
               <FilterSection />

               {/* PRODUCTS */}
               <section
                    id='shop-now'
                    className='px-16 py-8 flex flex-col gap-2'
               >
                    <h1 className='font-medium text-2xl text-orange-950'>
                         Elegant Beauty Picks
                    </h1>

                    <Products />
               </section>

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
