import { Link } from 'react-router-dom';
import { ImSearch, ImCart } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';

import Logo from './Logo';
import NavItems from './NavItems';

const Navbar = () => {
 return (
  <nav className='bg-gray-100 flex justify-between items-center px-6 h-[100px]'>
   <Logo />

   <NavItems />

   <div>
    <ul className='flex gap-3 items-center text-[18px]'>
     <li className='hover:bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 text-gray-700'>
      <Link to='/search'>
       <ImSearch />
      </Link>
     </li>

     <li className='hover:bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 text-gray-700'>
      <Link to='/cart'>
       <ImCart />
      </Link>
     </li>

     <li className='hover:bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 text-gray-700'>
      <Link to='/account/:user'>
       <BiUser />
      </Link>
     </li>
    </ul>
   </div>
  </nav>
 );
};

export default Navbar;
