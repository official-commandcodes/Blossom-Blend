import { Link } from 'react-router-dom';

const DropDown = () => {
     return (
          <ul className='text-[13px] absolute z-20 w-48 py-2 rounded-md bg-orange-100 border-[1px] flex flex-col gap-1'>
               <Link>
                    <li className='p-2 hover:bg-orange-50 transition-all duration-300'>
                         Skincare
                    </li>
               </Link>
               <Link>
                    <li className='p-2 hover:bg-orange-50 transition-all duration-300'>
                         Haircare
                    </li>
               </Link>
               <Link>
                    <li className='p-2 hover:bg-orange-50 transition-all duration-300'>
                         Makeup
                    </li>
               </Link>
               <Link>
                    <li className='p-2 hover:bg-orange-50 transition-all duration-300'>
                         Fragrances
                    </li>
               </Link>
               <Link>
                    <li className='p-2 hover:bg-orange-50 transition-all duration-300'>
                         Skincare
                    </li>
               </Link>
          </ul>
     );
};

export default DropDown;
