import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/apiProducts';

export const useProduct = (id) => {
     const { status, data: product } = useQuery({
          queryKey: ['product', id],
          queryFn: () => getProduct({ id }),
     });

     return { status, product };
};
