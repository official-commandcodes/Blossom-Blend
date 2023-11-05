import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { loginGoogle as loginGoogleAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export const useGoogleLogin = () => {
     const navigate = useNavigate();

     const { status, mutate: google } = useMutation({
          mutationFn: loginGoogleAPI,

          onSuccess: (user) => {
               if (user.status === 'success') {
                    navigate('/');
               }
          },

          onError: (err) => {
               toast.error(err.message, {
                    duration: 8000,
                    className: 'bg-red-100 text-[10px]',
               });
          },
     });

     return { status, google };
};
