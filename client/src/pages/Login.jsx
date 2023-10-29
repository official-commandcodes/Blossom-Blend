import { useEffect } from 'react';
import LogIn from '../features/authentication/LogIn';

const Login = () => {
     useEffect(() => {
          document.title = 'Blossom Blend | Login';
     }, []);

     return (
          <div className='m-auto flex justify-center items-center h-screen bg-gray-200'>
               <LogIn />
          </div>
     );
};

export default Login;
