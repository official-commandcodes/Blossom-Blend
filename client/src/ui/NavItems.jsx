import { Link } from 'react-router-dom';
import { RiArrowDropDownFill } from 'react-icons/ri';

import DropDown from './DropDown';
import DropDownCompound from './DropDownCompound';

const hoverStyle =
 'text-[16px] cursor-pointer rounded-md border-gray-300 flex items-center font-medium';

const NavItems = () => {
 const handleMouseEnter = (e) => {
  e.target.classList =
   'text-gray-600 text-[16px] flex items-center transition-all duration-300';
 };

 const handleMouseLeave = (e) => {
  e.target.classList = hoverStyle;
 };

 return (
  <ul className='flex items-center gap-4 text-[14px]'>
   <li className='relative block'>
    <DropDownCompound>
     <DropDownCompound.Button>
      <button
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       className={hoverStyle}
       onClick={open}
      >
       Categories <RiArrowDropDownFill />
      </button>
     </DropDownCompound.Button>

     <DropDownCompound.DropDown>
      <DropDown />
     </DropDownCompound.DropDown>
    </DropDownCompound>
   </li>

   <li
    className={hoverStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
   >
    <Link>Promotions & Deals </Link>
   </li>

   <li
    className={hoverStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
   >
    <Link>About Us</Link>
   </li>

   <li
    className={hoverStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
   >
    <Link>Contact Us</Link>
   </li>
  </ul>
 );
};

export default NavItems;
