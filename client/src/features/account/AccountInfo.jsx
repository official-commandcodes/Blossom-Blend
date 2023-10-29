import { useState } from 'react';
import { useUser } from '../authentication/useUser';
import { API_URL } from '../../utils/helper';
import AccountUserProfile from './AccountUserProfile';
import AccountUserPassword from './AccountUserPassword';

const AccountInfo = () => {
     const { status, user } = useUser();

     const handleBlur = (e) => {
          const file = e.target.files[0];
          const name = e.target.name;

          console.log(file, name);
     };

     return (
          <div className='flex flex-col space-y-10 p-10 divide-y divide-gray-300'>
               <h1 className='text-[24px] font-bold'>Account Information</h1>

               <AccountUserProfile />

               <AccountUserPassword />
          </div>
     );
};

export default AccountInfo;
