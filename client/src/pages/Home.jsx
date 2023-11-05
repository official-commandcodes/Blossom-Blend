import { useEffect } from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import Products from '../features/products/Products';
import Pagination from '../ui/Pagination';
import Popular from '../features/products/Popular';
import FAQS from '../features/faq/FAQS';
import FilterSection from '../ui/FilterSection';
import HeroSection from '../ui/HeroSection';

const Home = () => {
     useEffect(() => {
          document.title = 'Blossom Blend | Homepage';
     }, []);

     useGoogleOneTapLogin({
          onSuccess: (credentialResponse) => {
               console.log(credentialResponse);
          },
          onError: () => {
               console.log('Login Failed');
          },
     });

     return (
          <div>
               {/* HERO SECTION */}
               <HeroSection />

               {/* FILTERS & SORT*/}
               <FilterSection />

               {/* PRODUCTS */}
               <section
                    id='shop-now'
                    className='px-4 md:px-10 lg:px-16 py-8 flex flex-col space-y-7'
               >
                    <h1 className='font-medium text-orange-950 text-[18px] lg:text-2xl'>
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
