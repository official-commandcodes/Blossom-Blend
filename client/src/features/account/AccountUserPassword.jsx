import { useUpdatePassword } from './useUpdatePassword';

import { useUser } from '../authentication/useUser';
import Spinner from '../../ui/Spinner';

const AccountUserPassword = () => {
     const { status: userStatus, user } = useUser();
     const { status, updatePassword } = useUpdatePassword();

     const handleClick = (e) => {
          e.preventDefault();
          updatePassword({ email: user.email });
     };

     if (userStatus === 'pending') return null;

     return (
          <form className='flex flex-col space-y-4 pt-4'>
               <h1 className='text-[15px] font-medium'>Update your Password</h1>

               <div className='flex space-x-3 items-center text-gray-200'>
                    <input
                         type='text'
                         id='currentPassword'
                         disabled
                         value={user.email}
                         className='outline-none px-3 py-2 rounded-md text-[14px] font-light italic w-[16rem] bg-orange-500'
                    />
                    <button
                         onClick={handleClick}
                         className='bg-orange-700 w-24 h-10 rounded-md flex justify-center items-center'
                    >
                         {status === 'pending' ? (
                              <Spinner w='20px' h='17px' />
                         ) : (
                              'update'
                         )}
                    </button>
               </div>
          </form>
     );
};

export default AccountUserPassword;
