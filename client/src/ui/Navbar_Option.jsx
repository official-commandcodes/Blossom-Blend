import { Link } from 'react-router-dom';
import { ImSearch, ImCart } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';
import { useState } from 'react';
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
                    <input
                         type='text'
                         placeholder='Search for any product here ...'
                         className={`text-xs px-4 py-2 w-56 outline-none rounded-sm italic focus:bg-slate-50 focus:border-[1px] focus:border-orange-100`}
                    />
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
               <li className='hover:bg-orange-50 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer'>
                    <BiUser />
               </li>
          </ul>
     );
};

export default Navbar_Option;
