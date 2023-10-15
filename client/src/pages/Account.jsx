import { Outlet } from 'react-router-dom';
import AccountAside from '../ui/AccountAside';

const Account = () => {
     return (
          <div className='px-16 py-4 flex flex-col gap-4'>
               <h1 className='text-[20px] font-medium'>Hello, James</h1>

               <div className='grid grid-cols-4 border-[2px] border-gray-300'>
                    <AccountAside />

                    <section className='col-span-3 bg-gray-200'>
                         <Outlet />
                    </section>
               </div>
          </div>
     );
};

export default Account;
