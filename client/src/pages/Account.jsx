import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import AccountAside from '../ui/AccountAside';
import { useUser } from '../features/authentication/useUser';

const Account = () => {
     const { status, user } = useUser();

     useEffect(() => {
          document.title = `Blossom Blend | Account information`;
     }, []);

     return (
          <div className='px-16 py-4 flex flex-col space-y-4'>
               <h1 className='text-[20px] font-medium'>
                    Hello,{' '}
                    {status === 'pending' ? (
                         <Skeleton width='100px' height='26px' />
                    ) : (
                         user.name.split(' ')[0]
                    )}
               </h1>

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
