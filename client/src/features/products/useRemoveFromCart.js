import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { removeFromCart as removeFromCartAPI } from '../../services/apiProducts';

export const useRemoveFromCart = () => {
     const queryClient = useQueryClient();

     const { status, mutate: removeFromCart } = useMutation({
          mutationFn: removeFromCartAPI,

          onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ['user'] });
               queryClient.invalidateQueries({ queryKey: ['total'] });
               toast.success('Product removed successfully!', {
                    className: 'text-[12px]',
               });
          },
     });

     return { status, removeFromCart };
};
