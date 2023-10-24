import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login as loginAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
     const navigate = useNavigate();

     const { status, mutate: login } = useMutation({
          mutationFn: loginAPI,

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

     return { status, login };
};
