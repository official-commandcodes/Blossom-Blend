import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/apiProducts';
import { REFETCH_TIMER } from '../../utils/helper';

export const useWishlists = (id) => {
     const { status, data: wishlist } = useQuery({
          queryKey: ['wishlists', id],
          queryFn: () => getProductById(id),

          refetchInterval: REFETCH_TIMER,
     });

     return { status, wishlist };
};
