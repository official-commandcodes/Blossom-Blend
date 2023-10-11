import { Link } from 'react-router-dom';
import { ImSearch, ImCart } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';

const Navbar_Option = () => {
     return (
          <ul className='flex gap-3 items-center text-[18px] text-orange-300'>
               <li className='hover:bg-orange-50 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300'>
                    <Link to='/search'>
                         <ImSearch />
                    </Link>
               </li>

               <li className='hover:bg-orange-50 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300'>
                    <Link to='/cart'>
                         <ImCart />
                    </Link>
               </li>

               <li className='hover:bg-orange-50 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300'>
                    <Link to='/account/:user'>
                         <BiUser />
                    </Link>
               </li>
          </ul>
     );
};

export default Navbar_Option;
