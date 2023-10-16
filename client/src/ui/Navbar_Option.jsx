import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch, ImCart } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';
import { useClickOutside } from '../hooks/useClickOutside';

const Navbar_Option = () => {
     const [active, setActive] = useState(false);
     const ref = useClickOutside(active, setActive);

     const handleSearch = () => {
          setActive(true);
     };

     return (
          <ul className='flex gap-3 items-center text-[18px] text-orange-100'>
               <input
                    ref={ref}
                    type='text'
                    placeholder='Search for any product here ...'
                    className={`bg-orange-200 border-none transition duration-1000 ease-in-out text-xs px-4 py-2 w-56 outline-none rounded-sm italic focus:ring-2 focus:ring-orange-950 focus:bg-orange-300 focus:border-[1px] focus:border-orange-100 text-orange-950 placeholder:text-orange-950 ${
                         active
                              ? 'animate-[slide_1s_ease-in-out]'
                              : 'translate-x-14 hidden'
                    }`}
               />

               <li
                    className='hover:bg-orange-800 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer'
                    onClick={handleSearch}
               >
                    <ImSearch />
               </li>

               <li className='hover:bg-orange-800 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 relative'>
                    <Link to='/carts'>
                         <ImCart />
                    </Link>

                    <span className='absolute top-[1px] right-[1px] w-4 h-4 bg-orange-700 text-[10px] text-gray-200 flex justify-center items-center rounded-full'>
                         1
                    </span>
               </li>
               <Link
                    to='/account/user'
                    className='hover:bg-orange-800 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer'
               >
                    <BiUser />
               </Link>
          </ul>
     );
};

export default Navbar_Option;
