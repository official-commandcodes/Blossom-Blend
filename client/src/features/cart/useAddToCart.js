import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addToCart as addToCartAPI } from '../../services/apiProducts';

export const useAddToCart = () => {
     const queryClient = useQueryClient();

     const { status, mutate: addToCart } = useMutation({
          mutationFn: addToCartAPI,

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

     return { status, addToCart };
};
