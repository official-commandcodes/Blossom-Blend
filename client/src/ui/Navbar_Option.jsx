import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';
import { useUser } from '../features/authentication/useUser';

import DropDownProvider from './DropDownContext';

import Spinner from '../ui/Spinner';

const Navbar_Option = () => {
     const { status, user } = useUser();

     return (
          <div className='flex space-x-4 font-light text-[14px] text-gray-600'>
               <Link
                    to='/carts'
                    className='relative flex space-x-1 items-center font-medium  hover:text-orange-950 transition-all duration-300'
               >
                    <div className='relative text-[17px]'>
                         <span className='w-4 h-4 flex justify-center items-center absolute -top-1 -left-2 bg-orange-300 text-[8px] rounded-full'>
                              {status === 'success' ? user.carts.length : 0}
                         </span>
                         <ImCart />
                    </div>
                    <span>Cart</span>
               </Link>

               <div className='relative flex flex-col items-center font-medium'>
                    <DropDownProvider.Button account='account'>
                         <BiUser />{' '}
                         <span>
                              {status === 'success'
                                   ? user.name.split(' ')[0]
                                   : 'User'}
                         </span>
                    </DropDownProvider.Button>

                    <DropDownProvider.DropDown window='account'>
                         {status === 'pending' ? (
                              <div className='flex justify-center items-center'>
                                   <Spinner w='60' h='30' />
                              </div>
                         ) : (
                              <>
                                   {status === 'error' && (
                                        <Link
                                             to='/login'
                                             className='text-[14px] py-2 px-4 bg-orange-400 w-full text-center rounded-md font-medium text-gray-100 hover:bg-orange-600 active:bg-orange-600 transition-all duration-300'
                                        >
                                             Log in
                                        </Link>
                                   )}

                                   <div className='flex flex-col space-y-2'>
                                        <Link
                                             to={`/account/${user?.id}/info`}
                                             className='hover:font-medium hover:bg-gray-200 px-2 py-2 text-[14px] transition-all duration-300'
                                        >
                                             My Account
                                        </Link>

                                        <Link
                                             to={`/account/${user?.id}/orders`}
                                             className='hover:font-medium hover:bg-gray-200 px-2 py-2 text-[14px] transition-all duration-300'
                                        >
                                             Orders
                                        </Link>

                                        <Link
                                             to={`/account/${user?.id}/wishlists`}
                                             className='hover:font-medium hover:bg-gray-200 px-2 py-2 text-[14px] transition-all duration-300'
                                        >
                                             Saved Items
                                        </Link>
                                   </div>
                              </>
                         )}
                    </DropDownProvider.DropDown>
               </div>
          </div>
     );
};

export default Navbar_Option;
