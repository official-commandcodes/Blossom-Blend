import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addToWishlist as addToWishlistAPI } from '../../services/apiProducts';

export const useAddToWishlist = () => {
     const queryClient = useQueryClient();

     const { status, mutate: addToWishlist } = useMutation({
          mutationFn: addToWishlistAPI,

          onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ['user'] });
          },

          onError: (err) => {
               toast.error(err.message, {
                    className: 'text-[12px]',
               });
          },
     });

     return { status, addToWishlist };
};
