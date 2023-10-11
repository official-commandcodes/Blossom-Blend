import Logo from './Logo';
import NavItems from './NavItems';
import Navbar_Option from './Navbar_Option';

const Navbar = () => {
     return (
          <nav className='bg-gray-100 flex justify-between items-center px-6 h-[100px]'>
               <Logo />

               <NavItems />

               <Navbar_Option />
          </nav>
     );
};

export default Navbar;
