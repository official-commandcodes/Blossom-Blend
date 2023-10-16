import Products from '../features/products/Products';
import Pagination from '../ui/Pagination';
import Popular from '../features/products/Popular';
import FAQS from '../features/faq/FAQS';
import FilterSection from '../ui/FilterSection';
import HeroSection from '../ui/HeroSection';
import { useEffect } from 'react';

const Home = () => {
     useEffect(() => {
          const fetchAPI = async () => {
               try {
                    const res = await fetch(`${import.meta.env.VITE_API_URL}`);

                    const data = await res.json();

                    console.log(data);
               } catch (error) {
                    console.log(error);
               }
          };

          fetchAPI();
     }, []);
     return (
          <div>
               {/* HERO SECTION */}
               <HeroSection />

               {/* FILTERS & SORT*/}
               <FilterSection />

               {/* PRODUCTS */}
               <Products title='Elegant Beauty Picks' />

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
