import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateReset } from './usePasswordReset';
import { useUpdatePasswordRoute } from './useUpdatePasswordRoute';
import ActionButton from '../../ui/ActionButton';
import Spinner from '../../ui/Spinner';

const ForgotPassword = () => {
     const {
          register,
          handleSubmit,
          getValues,
          formState: { errors },
     } = useForm();
     const { status, verifyParameters } = useUpdateReset();
     const { status: updatingRoute, passwordRoute } = useUpdatePasswordRoute();
     const [error, setError] = useState('');

     useEffect(() => {
          verifyParameters(
               {},
               {
                    onSuccess: (data) => {
                         if (data.status === 'fail') {
                              setError(data.message);
                         }
                    },
               }
          );
     }, [verifyParameters]);

     function onSubmit(data) {
          passwordRoute(data);
     }

     if (status === 'pending') return <h1>Loading</h1>;

     if (error) {
          return (
               <div className='h-screen flex justify-center items-center'>
                    <h1>{error}</h1>
               </div>
          );
     }

     return (
          <div className='flex justify-center flex-col space-y-4 items-center h-screen'>
               <h1 className='font-bold text-[30px]'>Blossom Blend</h1>

               <form
                    className='bg-orange-900 flex flex-col items-center px-4 py-3 rounded-md space-y-6 w-4/12'
                    onSubmit={handleSubmit(onSubmit)}
               >
                    <div>
                         <img
                              src='/lock.png'
                              alt='Reset Image'
                              className='w-24 h-24 text-white'
                         />
                    </div>

                    <div className='flex flex-col space-y-1 items-start text-gray-200 w-full'>
                         <label htmlFor='newPassword' className='text-[14px]'>
                              New Password
                         </label>
                         <input
                              type='password'
                              id='newPassword'
                              className='focus:border-[1px] rounded-md text-[14px] font-light italic w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-700 p-2'
                              {...register('password')}
                         />
                    </div>

                    <div className='flex flex-col space-y-1 items-start text-gray-200 w-full'>
                         <label
                              htmlFor='confirmPassword'
                              className='text-[14px]'
                         >
                              Confirm New Password
                         </label>
                         <input
                              type='password'
                              id='confirmPassword'
                              className='focus:border-[1px] rounded-md text-[14px] font-light italic w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-700 p-2'
                              {...register('passwordConfrim', {
                                   validate: (val) => {
                                        return (
                                             getValues().password === val ||
                                             'passwords must be the same'
                                        );
                                   },
                              })}
                         />

                         {errors?.confirmPassword && (
                              <span className='text-[13px] text-green-200'>
                                   {errors.confirmPassword.message}
                              </span>
                         )}
                    </div>

                    <ActionButton>
                         {updatingRoute === 'pending' ? (
                              <Spinner w='20' h='18px' />
                         ) : updatingRoute === 'success' ? (
                              'Password updated'
                         ) : (
                              'Reset Password'
                         )}
                    </ActionButton>
               </form>
          </div>
     );
};

export default ForgotPassword;
