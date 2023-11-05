import { useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { BiSolidLockAlt } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { GoogleLogin } from '@react-oauth/google';

import { useLogin } from './useLogin';

import AuthHeader from '../../ui/AuthHeader';
import Spinner from '../../ui/Spinner';
import { useGoogleLogin } from './useGoogleLogin';

const LogIn = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();
     const { status, login } = useLogin();
     const { status: googleStatus, google } = useGoogleLogin();

     useEffect(() => {
          toast.success(
               "If you've just created your account, please validate your email before logging in",
               {
                    duration: 8000,
                    position: 'top-center',

                    className: 'bg-red-100 text-[10px]',

                    // Custom Icon
                    icon: '⚠️',

                    iconTheme: {
                         primary: '#000',
                         secondary: '#fff',
                    },

                    ariaProps: {
                         role: 'status',
                         'aria-live': 'polite',
                    },
               }
          );
     }, []);

     const onSubmit = (data) => {
          login(data);
     };

     const onGoogle = (credentials) => {
          google({
               clientId: credentials.clientId,
               token: credentials.credential,
          });
     };

     return (
          <div
               className='flex flex-col space-y-2 w-4/12 py-6 px-3 bg-orange-800 rounded-md'
               onSubmit={handleSubmit(onSubmit)}
          >
               <AuthHeader
                    header='Log In to Blossom Blend'
                    to='/sign-up'
                    text='Sign Up'
               />

               <form className='flex flex-col space-y-2 py-6 px-3 bg-orange-800 rounded-md'>
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
                              className={`w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic focus:border-[1px] text-[14px] font-light italic focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-700 p-2 ${
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
                              className={`w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic text-[14px] font-light italic focus:border-orange-500 focus:ring-1  focus:ring-orange-500 text-gray-700 p-2 ${
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

                    <button
                         type='submit'
                         className='h-14 flex items-center justify-center space-x-2 text-[15px] bg-orange-50 rounded-sm text-orange-600 hover:bg-orange-100 transition-all ease-in-out duration-300'
                    >
                         {status === 'idle' ? (
                              <span>Login</span>
                         ) : status === 'pending' ? (
                              <Spinner h='20' w='40' />
                         ) : status === 'error' ? (
                              'try again'
                         ) : (
                              'Login'
                         )}
                    </button>
               </form>

               <div className='w-full flex flex-col justify-center items-center space-y-4'>
                    <GoogleLogin
                         onSuccess={(credentials) => onGoogle(credentials)}
                         onError={() => {
                              console.log('Login Failed');
                         }}
                         useOneTap
                    />
               </div>
          </div>
     );
};

export default LogIn;
