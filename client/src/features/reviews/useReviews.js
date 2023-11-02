import { useQuery } from '@tanstack/react-query';
import { getAllReview } from '../../services/apiReviews';
import { REFETCH_TIMER } from '../../utils/helper';

export const useCreateReview = () => {
     const { status, data: reviews } = useQuery({
          queryKey: 'reviews',
          queryFn: getAllReview,

          refetchInterval: REFETCH_TIMER,
     });

     return { status, reviews };
};
