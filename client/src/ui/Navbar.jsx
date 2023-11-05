import Logo from './Logo';

import Navbar_Option from './Navbar_Option';
import SearchBar from './SearchBar';

const Navbar = () => {
     return (
          <nav className='lg:px-10 px-4 flex justify-between items-center h-[80px] md:h-[100px] sticky top-0 bg-gray-200 z-10 border-b-[1px] border-gray-300'>
               <Logo />

               <SearchBar />

               <Navbar_Option />
          </nav>
     );
};

export default Navbar;
