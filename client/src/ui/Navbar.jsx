import Logo from './Logo';

import Navbar_Option from './Navbar_Option';
import SearchBar from './SearchBar';

const Navbar = () => {
     return (
          <nav className='flex justify-between items-center px-10 h-[100px] sticky top-0 bg-gray-200 z-10 border-b-[1px] border-gray-300'>
               <Logo />

               <SearchBar />

               <Navbar_Option />
          </nav>
     );
};

export default Navbar;
