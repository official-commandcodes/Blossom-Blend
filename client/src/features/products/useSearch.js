import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSearchProducts } from '../../services/apiProducts';

export const useSearch = () => {
     const [searchParams] = useSearchParams();

     const query = searchParams.get('q');

     const { isLoading, data: search } = useQuery({
          queryKey: ['search', query],
          queryFn: () => getSearchProducts(query),
     });

     return { isLoading, search };
};
