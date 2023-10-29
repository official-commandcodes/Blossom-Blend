import { Link, useParams } from 'react-router-dom';
import { useEmailVerication } from './useEmailVerication';
import Spinner from '../../ui/Spinner';
import { useEffect } from 'react';

export const EmailVerify = () => {
     const { userId, token } = useParams();
     const { status, verify } = useEmailVerication();

     useEffect(() => {
          document.title = `Blossom Blend | Email verification`;

          verify({ userId, token });
     }, [verify, userId, token]);

     return (
          <div className='flex justify-center items-center'>
               <div className='w-8/12 h-screen flex justify-center items-center flex-col space-y-4'>
                    <div>
                         {status === 'pending' ? (
                              <Spinner />
                         ) : status === 'error' ? (
                              <span className='text-gray-300'>
                                   Invalid token
                              </span>
                         ) : (
                              <img
                                   src='/complete-verification.png'
                                   alt='Verification image'
                                   className='w-[100px] h-[100px]'
                              />
                         )}
                    </div>

                    <h3 className='font-medium text-[20px]'>
                         Email Verification
                    </h3>

                    <p className='font-light text-center'>
                         Your email was verified. You can log in now{' '}
                         <Link to='/login' className='underline text-blue-500'>
                              here
                         </Link>
                    </p>
               </div>
          </div>
     );
};
