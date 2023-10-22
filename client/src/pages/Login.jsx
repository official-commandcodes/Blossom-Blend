import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUser, BiSolidLockAlt } from 'react-icons/bi';
import Login_SignInput from '../ui/Login_SignInput';

const Login = () => {
     const [remember, setRemember] = useState(false);

     return (
          <div className='m-auto flex justify-center items-center h-screen bg-gray-200'>
               <div className='w-10/12  opacity-80 h-5/6 flex shadow-lg shadow-gray-500/80 rounded-md'>
                    <div className='flex-1 bg-sky-800'>
                         <img
                              src='/login.svg'
                              alt='Login Side Image'
                              className='w-full h-full'
                         />
                    </div>

                    <div className='flex-1 flex flex-col justify-center items-center gap-8 w-full bg-gray-300'>
                         <div>
                              <h2 className='text-[28px] font-bold text-center'>
                                   Log In to Blossom Blend
                              </h2>
                              <p className='text-[12px] text-center'>
                                   or{' '}
                                   <Link
                                        to='/sign-up'
                                        className='underline text-blue-700'
                                   >
                                        Create an account
                                   </Link>
                              </p>
                         </div>

                         <form className='flex flex-col gap-6 w-9/12'>
                              <Login_SignInput
                                   icon={<BiSolidUser />}
                                   label='Email'
                                   type='email'
                              />

                              <Login_SignInput
                                   icon={<BiSolidLockAlt />}
                                   type='password'
                                   label='Password'
                              />

                              <div className='text-[12px] flex items-center gap-1'>
                                   <input
                                        type='checkbox'
                                        id='remember'
                                        checked={remember}
                                        onChange={() =>
                                             setRemember(
                                                  (remember) => !remember
                                             )
                                        }
                                   />{' '}
                                   <label htmlFor='remember'>Remember me</label>
                              </div>

                              <button
                                   type='submit'
                                   className='bg-sky-700 py-2 rounded-sm text-sky-100 hover:bg-sky-950 transition-all ease-in-out duration-300 cursor-pointer'
                              >
                                   Sign In
                              </button>
                         </form>

                         <div className='flex flex-col gap-3'>
                              <Link
                                   to='/auth/google'
                                   className='cursor-pointer text-center px-4 py-1 flex items-center bg-sky-700 rounded-sm text-sky-100 hover:bg-sky-950 transition-all ease-in-out duration-300'
                              >
                                   <img
                                        src='/google.png'
                                        alt=''
                                        className='w-10 h-10 object-cover'
                                   />
                                   <span>Sign in with Google</span>
                              </Link>

                              <Link
                                   to={'/sign-up'}
                                   className='text-center text-blue-600 underline text-[14px]'
                              >
                                   Forgot Password?
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;
