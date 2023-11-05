import { BiSolidLockAlt } from 'react-icons/bi';
import {
     MdOutlineDriveFileRenameOutline,
     MdOutlineEmail,
} from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useSignUp } from './useSignUp';
import { useGoogleSignUp } from './useGoogleSignUp';
// import { Google } from '@react-oauth/google';

import Spinner from '../../ui/Spinner';
import AuthHeader from '../../ui/AuthHeader';

const SignUp = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
          getValues,
     } = useForm();
     const { status, signup } = useSignUp();
     // const { status: signuoGoogle, google } = useGoogleSignUp();

     const onSubmit = (data) => {
          signup(data, {
               onSuccess: () => {
                    getValues().name = '';
                    getValues().email = '';
                    getValues().password = '';
                    getValues().passwordConfirm = '';
               },
          });
     };

     return (
          <form
               className='flex flex-col space-y-6 w-5/12 py-6 px-3 bg-orange-800'
               onSubmit={handleSubmit(onSubmit)}
          >
               <AuthHeader
                    header='Sign Up to Blossom Blend'
                    to='/login'
                    text='Login'
               />

               <div className='flex items-center bg-orange-50 h-10'>
                    <label
                         htmlFor='FullName'
                         className='text-[19px] px-2 text-orange-700'
                    >
                         <MdOutlineDriveFileRenameOutline />
                    </label>
                    <input
                         id='FullName'
                         type='text'
                         placeholder='FullName'
                         className={`w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic italic text-[14px] ${
                              errors?.name?.message
                                   ? 'border-2 border-red-300'
                                   : ''
                         }`}
                         {...register('name', {
                              required: 'FullName is required',
                         })}
                    />
               </div>

               <div className='flex items-center bg-orange-50 h-10'>
                    <label
                         htmlFor='Email'
                         className='text-[19px] px-2 text-orange-700'
                    >
                         <MdOutlineEmail />
                    </label>
                    <input
                         id='Email'
                         type='email'
                         placeholder='Email ...'
                         className={`w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic italic text-[14px] ${
                              errors?.email?.message
                                   ? 'border-2 border-red-300'
                                   : ''
                         }`}
                         {...register('email', {
                              required: 'Email Address is required',
                              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                         })}
                    />
               </div>

               <div className='flex items-center bg-orange-50 h-10'>
                    <label
                         htmlFor='Password'
                         className='text-[19px] px-2 text-orange-700'
                    >
                         <BiSolidLockAlt />
                    </label>
                    <input
                         id='Password'
                         type='password'
                         placeholder='Password ...'
                         className={`w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic italic text-[14px] ${
                              errors?.password?.message
                                   ? 'border-2 border-red-300'
                                   : ''
                         }`}
                         {...register('password', {
                              required: 'Password is required',
                              minLength: [
                                   8,
                                   'Password length must be greater than 8',
                              ],
                         })}
                    />
               </div>

               <div className='flex items-center bg-orange-50 h-10'>
                    <label
                         htmlFor='PasswordConfirm'
                         className='text-[19px] px-2 text-orange-700'
                    >
                         <BiSolidLockAlt />
                    </label>
                    <input
                         id='PasswordConfirm'
                         type='password'
                         placeholder='Password Confirm ...'
                         className={`w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic italic text-[14px] ${
                              errors?.passwordConfirm?.message
                                   ? 'border-2 border-red-300'
                                   : ''
                         }`}
                         {...register('passwordConfirm', {
                              required: 'passwordConfirm Confirm is required',
                              minLength: [
                                   8,
                                   'Password Confirm length must be greater than 8',
                              ],
                              validate: (val) => {
                                   return (
                                        getValues().password === val ||
                                        'Password & passwordConfirm must be the same'
                                   );
                              },
                         })}
                    />
               </div>

               <div className='w-full flex flex-col justify-center items-center space-y-4'>
                    <button
                         type='submit'
                         className='w-10/12 h-14 flex items-center justify-center space-x-2 text-[15px] bg-orange-50 rounded-sm text-orange-600 hover:bg-orange-100 transition-all ease-in-out duration-300'
                    >
                         {status === 'idle' ? (
                              <span>Sign up</span>
                         ) : status === 'pending' ? (
                              <Spinner h='20' w='40' />
                         ) : status === 'error' ? (
                              'try again'
                         ) : (
                              'Sign up'
                         )}
                    </button>

                    <button className='w-10/12 h-14 flex items-center justify-center space-x-2 text-[15px] bg-orange-50 rounded-sm text-orange-600 hover:bg-orange-100 transition-all ease-in-out duration-300'>
                         <img
                              src='/google.png'
                              alt='Google logo'
                              className='w-10 h-10 object-cover'
                         />
                         <span>Sign up with Google</span>
                    </button>
               </div>
          </form>
     );
};

export default SignUp;
