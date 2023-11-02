import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCartItems as updateCartItemsAPI } from '../../services/apiProducts';

export const useUpdateCartItems = () => {
     const queryClient = useQueryClient();

     const { status, mutate: updateCartItems } = useMutation({
          mutationFn: updateCartItemsAPI,

          onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ['user'] });
               queryClient.invalidateQueries({ queryKey: ['total'] });
          },

          onError: (err) => {
               toast.error(err.message, {
                    className: 'text-[12px]',
               });
          },
     });

     return { status, updateCartItems };
};
