import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { logout as logoutAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
     const navigate = useNavigate();
     const queryClient = useQueryClient();

     const { status, mutate: logout } = useMutation({
          mutationFn: logoutAPI,

          onSuccess: () => {
               navigate('/login');
               queryClient.invalidateQueries({ queryKey: ['user'] });
          },

          onError: (err) => {
               toast.error(err.message, {
                    duration: 8000,
                    className: 'bg-red-100 text-[10px]',
               });
          },
     });

     return { status, logout };
};
