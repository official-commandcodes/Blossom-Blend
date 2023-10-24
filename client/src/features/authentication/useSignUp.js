import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signupAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
     const navigate = useNavigate();

     const { mutate: signup, status } = useMutation({
          mutationFn: signupAPI,

          onSuccess: (user) => {
               if (user.status === 'success') {
                    toast.success(
                         `Your account has been created successfully! ${
                              user?.user?.name.split(' ')[0]
                         }`
                    );

                    navigate('/login');
               }
          },

          onError: (err) => {
               toast.error(err.message);
          },
     });

     return { status, signup };
};
