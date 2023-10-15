import { Link } from 'react-router-dom';

const style =
     'text-[15px] cursor-pointer rounded-md border-gray-300 flex items-center';
const NavItem = ({ text, s, param }) => {
     return (
          <li
               className={
                    param === s ? style + ' font-medium' : style + ' font-light'
               }
          >
               <Link to={`/products?s=${s}`}>{text}</Link>
          </li>
     );
};

export default NavItem;
