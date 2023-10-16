import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';
import DropDownProvider from './DropDownContext';

const Navbar_Option = () => {
     return (
          <div className='flex gap-4 font-light text-[14px] text-gray-600'>
               <Link className='relative flex gap-2 items-center font-medium hover:text-orange-300 transition-all duration-300'>
                    <ImCart /> <span>Cart</span>
               </Link>

               <div className='relative flex flex-col items-center font-medium'>
                    <DropDownProvider.Button account='account'>
                         <BiUser /> <span>User</span>
                    </DropDownProvider.Button>

                    <DropDownProvider.DropDown window='account'>
                         <button className='text-[14px] py-2 px-4 bg-orange-400 w-full text-center rounded-md font-medium text-gray-100 hover:bg-orange-600 active:bg-orange-600 transition-all duration-300'>
                              Sign in
                         </button>

                         <div className='flex flex-col gap-2 pt-2'>
                              <Link className='hover:font-medium text-[14px] transition-all duration-300'>
                                   My Account
                              </Link>
                              <Link className='hover:font-medium text-[14px] transition-all duration-300'>
                                   Orders
                              </Link>
                              <Link className='hover:font-medium text-[14px] transition-all duration-300'>
                                   Saved Items
                              </Link>
                         </div>
                    </DropDownProvider.DropDown>
               </div>
          </div>
     );
};

export default Navbar_Option;
