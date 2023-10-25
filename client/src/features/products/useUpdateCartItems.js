import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCartItems as updateCartItemsAPI } from '../../services/apiProducts';

export const useUpdateCartItems = () => {
     const queryClient = useQueryClient();

     const { status, mutate: updateCartItems } = useMutation({
          mutationFn: updateCartItemsAPI,

          onSuccess: () => {
               window.location.reload();
               queryClient.invalidateQueries({ queryKey: ['user'] });
          },

          onError: (err) => {
               toast.error(err.message, {
                    className: 'text-[12px]',
               });
          },
     });

     return { status, updateCartItems };
};
