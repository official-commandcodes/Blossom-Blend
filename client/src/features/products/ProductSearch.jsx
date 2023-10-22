import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearch } from './useSearch';

const ProductSearch = () => {
     const [query, setQuery] = useState('');
     const [searchParams, setSearchParams] = useSearchParams();
     const { isLoading, search } = useSearch();
     const navigate = useNavigate();

     //  query = searchParams.get('q');
     useEffect(() => {
          if (query) {
               searchParams.set('q', query);
               setSearchParams(searchParams);
          }
     }, [searchParams, setSearchParams, query]);

     const handleNavigate = (slug) => {
          navigate(`/products/${slug}`);
          window.location.reload();
     };

     const handleQuery = (e) => {
          setQuery(e.target.value);
     };

     return (
          <>
               <div className='flex items-center gap-4'>
                    <input
                         type='text'
                         placeholder='Search for any product here ...'
                         className={`bg-gray-100 border-none transition-all duration-1000 ease-in-out text-xs px-4 py-2 outline-none rounded-sm italic focus:ring-1 focus:ring-orange-300 focus:border-[1px] w-72 focus:w-80`}
                         onChange={handleQuery}
                         value={query}
                    />

                    <button className='bg-orange-400 w-[100px] h-[33px] flex justify-center items-center rounded-[3px] text-gray-100 hover:bg-orange-600 active:bg-orange-600 transition-all duration-300'>
                         search
                    </button>
               </div>

               {query && (
                    <div className='absolute bg-orange-300 opacity-95 w-full mt-5 rounded-md'>
                         <ul className='py-1 divide-y-[1px] h-96 overflow-y-scroll grid grid-flow-row'>
                              {isLoading &&
                                   Array.from({ length: 8 }, (_, i) => {
                                        <li
                                             key={i + 1}
                                             className='grid grid-flow-row'
                                        >
                                             <Skeleton count={1} />;
                                        </li>;
                                   })}

                              {!isLoading &&
                                   search.map((s, i) => (
                                        <li
                                             onClick={() =>
                                                  handleNavigate(s.slug)
                                             }
                                             key={i + 1}
                                             className='flex items-center justify-between w-full px-2 py-4 cursor-pointer'
                                        >
                                             <span className='font-light'>{`${s.title.slice(
                                                  0,
                                                  30
                                             )}...`}</span>
                                             <span className='font-medium'>
                                                  ${s.price}
                                             </span>
                                        </li>
                                   ))}
                         </ul>
                    </div>
               )}
          </>
     );
};

export default ProductSearch;
