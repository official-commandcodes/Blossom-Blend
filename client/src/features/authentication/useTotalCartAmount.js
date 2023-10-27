import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getTotalAmount } from '../../services/apiAuth';
import { useUser } from './useUser';

export const useCartTotalAmount = () => {
     const queryClient = useQueryClient();
     const { user } = useUser();

     const { status, mutate: total } = useMutation({
          mutationKey: ['total'],
          mutationFn: () => getTotalAmount(user?.carts),

          onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ['total'] });
          },
     });

     return { status, total };
};
