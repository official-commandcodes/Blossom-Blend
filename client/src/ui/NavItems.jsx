import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NavItem from './NavItem';

const style =
     'text-[15px] cursor-pointer rounded-md border-gray-300 flex items-center';

const NavItems = () => {
     const [searchParams] = useSearchParams();
     const [active, setActive] = useState('');

     useEffect(() => {
          if (searchParams.get('s')) {
               setActive(searchParams.get('s'));
          }
     }, [searchParams]);

     console.log();

     return (
          <ul className='flex items-center gap-4 text-orange-100'>
               <NavItem text='Skincare' s='skincare' param={active} />

               <NavItem text='Haircare' s='haircare' param={active} />

               <NavItem text='Makeup' s='makeup' param={active} />

               <NavItem text='Fragrance' s='fragrance' param={active} />

               <NavItem text='Body & Bath' s='body-bath' param={active} />

               <li
                    className={
                         window.location?.pathname === '/contact-us'
                              ? style + ' font-medium'
                              : style + ' font-light'
                    }
               >
                    <Link to='/contact-us'>Contact Us</Link>
               </li>
          </ul>
     );
};

export default NavItems;
