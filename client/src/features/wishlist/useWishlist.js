import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/apiProducts';

export const useWishlists = (id) => {
     const { status, data: wishlist } = useQuery({
          queryKey: ['wishlists', id],
          queryFn: () => getProductById(id),
     });

     return { status, wishlist };
};
