import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { updatePasswordRoute } from '../../services/apiAuth';

export const useUpdatePasswordRoute = () => {
     const navigate = useNavigate();

     const { status, mutate: passwordRoute } = useMutation({
          mutationFn: updatePasswordRoute,

          onSuccess: () => {
               navigate('/');
          },

          onError: (err) => {
               console.log(err);
          },
     });

     return { status, passwordRoute };
};
