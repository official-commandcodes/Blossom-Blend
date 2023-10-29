import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateUser } from '../../services/apiAuth';

export const useUpdateProfile = () => {
     const queryClient = useQueryClient();

     const { status, mutate: update } = useMutation({
          mutationFn: updateUser,

          onSuccess: (user) => {
               queryClient.invalidateQueries({ queryKey: ['user'] });
               toast.success(
                    `Your account successfully updated! ${
                         user?.user?.name.split(' ')[0]
                    }`
               );
          },

          onError: (err) => {
               toast.error(err.message);
          },
     });

     return { status, update };
};
