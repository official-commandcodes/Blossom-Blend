import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/apiProducts';
import { REFETCH_TIMER } from '../../utils/helper';

export const useProduct = (id) => {
     const { status, data: product } = useQuery({
          queryKey: ['product', id],
          queryFn: () => getProduct({ id }),
          refetchInterval: REFETCH_TIMER,
     });

     return { status, product };
};
