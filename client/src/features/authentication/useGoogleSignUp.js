import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signupGoogle as signupGoogleAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export const useGoogleSignUp = () => {
     const navigate = useNavigate();

     const { mutate: google, status } = useMutation({
          mutationFn: signupGoogleAPI,

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

     return { status, google };
};
