import { NavLink } from 'react-router-dom';

const style = 'py-4 cursor-pointer px-3 transition-all duration-300';

const AccountAside = () => {
     return (
          <aside className='border-r-[2px] border-gray-300'>
               <ul className='text-[12px] divide-y-2 flex flex-col'>
                    <NavLink
                         to='/account/user/info'
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         ACCOUNT INFORMATION
                    </NavLink>

                    <NavLink
                         to='/account/user/orders'
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         MY ORDERS
                    </NavLink>

                    {/* <NavLink
                         to='/account/user/newsletter-subcribtion'
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         NEWSLETTER SUBSCRIBTION
                    </NavLink> */}

                    <NavLink
                         to='/account/user/wishlists'
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         MY WISHLIST
                    </NavLink>

                    {/* <NavLink
                         to='/account/user/logout'
                         className={({ isActive }) =>
                              isActive
                                   ? style + ' bg-gray-200'
                                   : style + ' hover:bg-gray-300'
                         }
                    >
                         LOGOUT
                    </NavLink> */}
               </ul>
          </aside>
     );
};

export default AccountAside;
