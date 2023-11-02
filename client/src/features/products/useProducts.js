import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../../services/apiProducts';
import { useSearchParams } from 'react-router-dom';
import { REFETCH_TIMER } from '../../utils/helper';

export const useProducts = () => {
     const [searchParams] = useSearchParams();

     const category = searchParams.get('category') || 'all';
     const sort = searchParams.get('sort') || 'all';

     const { isLoading, data: products } = useQuery({
          queryKey: ['products', category, sort],
          queryFn: () => getAllProduct(category, sort),
          refetchInterval: REFETCH_TIMER,
     });

     return { isLoading, products };
};
