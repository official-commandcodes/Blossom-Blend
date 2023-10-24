import { MdOutlineEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { BiSolidLockAlt } from 'react-icons/bi';
import toast from 'react-hot-toast';

import { useLogin } from './useLogin';

import AuthHeader from '../../ui/AuthHeader';
import Spinner from '../../ui/Spinner';
import { useEffect } from 'react';

const LogIn = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();
     const { status, login } = useLogin();

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

     return (
          <form
               className='flex flex-col space-y-8 w-4/12 py-6 px-3 bg-gray-800 rounded-md'
               onSubmit={handleSubmit(onSubmit)}
          >
               <AuthHeader
                    header='Log In to Blossom Blend'
                    to='/sign-up'
                    text='Sign Up'
               />

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

               <div className='w-full flex flex-col justify-center items-center space-y-4'>
                    <button
                         type='submit'
                         className='w-10/12 h-14 flex items-center justify-center space-x-2 text-[15px] bg-orange-50 rounded-sm text-orange-600 hover:bg-orange-100 transition-all ease-in-out duration-300'
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

                    <button className='w-10/12 h-14 flex items-center justify-center space-x-2 text-[15px] bg-orange-50 rounded-sm text-orange-600 hover:bg-orange-100 transition-all ease-in-out duration-300'>
                         <img
                              src='/google.png'
                              alt='Google logo'
                              className='w-10 h-10 object-cover'
                         />
                         <span>Login with Google</span>
                    </button>
               </div>
          </form>
     );
};

export default LogIn;
