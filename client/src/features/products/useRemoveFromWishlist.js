import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { removeFromWishlist as removeFromWishlistAPI } from '../../services/apiProducts';

export const useRemoveFromWishlist = () => {
     const queryClient = useQueryClient();

     const { status, mutate: removeFromWishlist } = useMutation({
          mutationFn: removeFromWishlistAPI,

          onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ['user'] });
               toast.success('Product removed successfully!', {
                    className: 'text-[12px]',
               });
          },
     });

     return { status, removeFromWishlist };
};
