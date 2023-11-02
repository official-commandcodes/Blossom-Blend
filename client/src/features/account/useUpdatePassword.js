import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updatePassword as updatePasswordAPI } from '../../services/apiAuth';

export const useUpdatePassword = () => {
     const { status, mutate: updatePassword } = useMutation({
          mutationFn: updatePasswordAPI,

          onSuccess: () => {
               toast.success('Check your mail box.');
          },

          onError: (err) => {
               toast.error(err.message);
          },
     });

     return { status, updatePassword };
};
