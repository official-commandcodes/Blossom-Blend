import { useEffect } from 'react';
import SignUp from '../features/authentication/SignUp';

const Signup = () => {
     useEffect(() => {
          document.title = 'Blossom Blend | Sign Up';
     }, []);
     return (
          <div className='m-auto flex justify-center items-center h-screen bg-gray-200'>
               <SignUp />
          </div>
     );
};

export default Signup;
