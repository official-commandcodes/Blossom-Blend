import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/apiProducts';
import { useParams } from 'react-router-dom';

export const useProduct = () => {
     const { slug } = useParams();

     const { isLoading, data: product } = useQuery({
          queryKey: ['product', slug],
          queryFn: () => getProduct({ slug }),
     });

     return { isLoading, product };
};
