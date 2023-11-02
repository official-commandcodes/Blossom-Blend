import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import { useEffect } from 'react';

const ProtectedRoutes = ({ children }) => {
     const { status, user } = useUser();
     const navigate = useNavigate();

     useEffect(() => {
          if (status !== 'pending' && !user) {
               navigate('/login', { replace: true });
          }
     }, [status, user, navigate]);

     if (status === 'pending') {
          return (
               <div className='flex justify-center items-center h-screen'>
                    <Spinner w='30px' h='25px' />
               </div>
          );
     }

     if (user) return children;
};

export default ProtectedRoutes;
