// import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../utils/helper';
import { useUser } from '../authentication/useUser';
import { useUpdateProfile } from './useUpdateProfile';

import Spinner from '../../ui/Spinner';
import ActionButton from '../../ui/ActionButton';
import { useState } from 'react';

const AccountUserProfile = () => {
     const { register, handleSubmit } = useForm();
     const { status: userStatus, user } = useUser();
     const { status: updateStatus, update } = useUpdateProfile();
     const [files, setFiles] = useState(null);

     console.log(user);

     const onSubmit = (values) => {
          const formData = new FormData();

          if (files) formData.append('file', files[0]);

          Object.entries(values).forEach(([key, val]) =>
               formData.append(key, val)
          );

          update(formData);
     };

     return (
          <form
               className='flex flex-col space-y-1 pt-4'
               onSubmit={handleSubmit(onSubmit)}
          >
               <h1 className='text-[15px] font-medium'>Profile</h1>
               <div className='flex space-x-3 items-center pt-4'>
                    <img
                         src={
                              userStatus === 'pending' && user?.photo
                                   ? `${API_URL}/users/${user.photo}`
                                   : '/avatar.svg'
                         }
                         alt='User profile image'
                         className='w-20 h-20 rounded-full'
                    />

                    <input
                         type='file'
                         className='block text-sm text-orange-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition-all duration-300 border-[1px] border-gray-100 w-58 px-1 py-2 rounded-md cursor-pointer outline-none'
                         defaultValue={user.photo}
                         onChange={(e) => setFiles(e.target.files)}
                         disabled={userStatus === 'pending'}
                    />
               </div>

               <div className='flex flex-col space-y-4 pt-4'>
                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='name'
                              className='text-[15px] font-medium'
                         >
                              Full Name{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='text'
                              id='name'
                              defaultValue={user.name}
                              {...register('name')}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                              disabled={userStatus === 'pending'}
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='email'
                              className='text-[15px] font-medium'
                         >
                              Email Address{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='email'
                              id='email'
                              defaultValue={user.email}
                              {...register('email')}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                              disabled={userStatus === 'pending'}
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='address'
                              className='text-[15px] font-medium'
                         >
                              Address <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='text'
                              id='address'
                              defaultValue={user.address}
                              {...register('address')}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                              disabled={userStatus === 'pending'}
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='phoneNumber'
                              className='text-[15px] font-medium'
                         >
                              Phone Number{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='number'
                              id='phoneNumber'
                              defaultValue={user.phoneNumber}
                              {...register('phoneNumber')}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                              disabled={userStatus === 'pending'}
                         />
                    </div>
               </div>

               <span className='w-24'>
                    <ActionButton>
                         {updateStatus === 'pending' ? (
                              <Spinner w='25px' h='20px' />
                         ) : (
                              'update'
                         )}
                    </ActionButton>
               </span>
          </form>
     );
};

export default AccountUserProfile;
