import { useSearchParams } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useProducts } from '../features/products/useProducts';
import { PAGINATE } from '../utils/helper';

const Pagination = () => {
     const { isLoading, products } = useProducts();
     const [searchParams, setSearchParams] = useSearchParams();

     if (isLoading) return;

     // TOTAL PRODUCTS
     const totalProducts = Math.ceil(products?.length / PAGINATE);

     const page = searchParams.get('page') * 1 || 1;

     // HANDLERS
     const handlePrevious = () => {
          if (page === 1) return;

          setSearchParams({ page: page - 1 });
     };

     const handleNext = () => {
          if (page === totalProducts) return;

          setSearchParams({ page: page + 1 });
     };

     return (
          <section className='flex justify-center items-center py-6'>
               <div className='flex items-center gap-6'>
                    <div
                         onClick={handlePrevious}
                         className={`w-10 h-10 rounded-full border-[1px] border-orange-800 flex justify-center items-center font-semibold ${
                              page === 1
                                   ? 'cursor-not-allowed'
                                   : 'cursor-pointer'
                         }`}
                    >
                         <BsChevronLeft />
                    </div>
                    <div className='text-orange-900'>{page}</div>
                    <div
                         onClick={handleNext}
                         className={`w-10 h-10 rounded-full border-[1px] border-orange-800 flex justify-center items-center font-semibold ${
                              page === totalProducts
                                   ? 'cursor-not-allowed'
                                   : 'cursor-pointer'
                         }`}
                    >
                         <BsChevronRight />
                    </div>
               </div>
          </section>
     );
};

export default Pagination;
