import { NavLink } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';

const style = 'py-4 cursor-pointer px-3 transition-all duration-300';

const AccountAside = () => {
     const { status, user } = useUser();

     if (status === 'pending') return null;

     return (
          <aside className='border-r-[2px] border-gray-300'>
               <ul className='text-[12px] divide-y-2 flex flex-col'>
                    <NavLink
                         to={`/account/${user.slug}/info`}
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         ACCOUNT INFORMATION
                    </NavLink>

                    <NavLink
                         to={`/account/${user.slug}/orders`}
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         MY ORDERS
                    </NavLink>

                    <NavLink
                         to={`/account/${user.slug}/wishlists`}
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         MY WISHLIST
                    </NavLink>
               </ul>
          </aside>
     );
};

export default AccountAside;
