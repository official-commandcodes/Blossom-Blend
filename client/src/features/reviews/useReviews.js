import { useQuery } from '@tanstack/react-query';
import { getAllReview } from '../../services/apiReviews';

export const useCreateReview = () => {
     const { status, data: reviews } = useQuery({
          queryKey: 'reviews',
          queryFn: getAllReview,
     });

     return { status, reviews };
};
