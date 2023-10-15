import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch, ImCart } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { useClickOutside } from '../hooks/useClickOutside';

const Navbar_Option = () => {
     const [active, setActive] = useState(false);
     const { ref } = useClickOutside(active, setActive);

     const handleSearch = () => {
          setActive(true);
     };

     return (
          <ul className='flex gap-3 items-center text-[18px] text-orange-300'>
               <div
                    ref={ref}
                    className={`transition duration-1000 ease-in-out ${
                         active
                              ? 'animate-[slide_1s_ease-in-out]'
                              : 'translate-x-14 hidden'
                    }`}
               >
                    <label className='relative block'>
                         <span className='sr-only'>Search</span>
                         <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                              <CiSearch />
                         </span>
                         <input
                              className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                              placeholder='Search for anything...'
                              type='text'
                              name='search'
                         />
                    </label>
                    {/* <input
                         type='text'
                         placeholder='Search for any product here ...'
                         className={`text-xs px-4 py-2 w-56 outline-none rounded-sm italic focus:bg-slate-50 focus:border-[1px] focus:border-orange-100`}
                    /> */}
               </div>

               <li
                    className='hover:bg-orange-50 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer'
                    onClick={handleSearch}
               >
                    <ImSearch />
               </li>

               <li className='hover:bg-orange-50 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 relative'>
                    <Link to='/carts'>
                         <ImCart />
                    </Link>

                    <span className='absolute top-[1px] right-[1px] w-4 h-4 bg-red-700 text-[10px] text-gray-200 flex justify-center items-center rounded-full'>
                         1
                    </span>
               </li>
               <Link
                    to='/account/user'
                    className='hover:bg-orange-50 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer'
               >
                    <BiUser />
               </Link>
          </ul>
     );
};

export default Navbar_Option;
