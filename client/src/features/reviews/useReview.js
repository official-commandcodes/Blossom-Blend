import { useQuery } from '@tanstack/react-query';
import { getReview } from '../../services/apiReviews';
import { REFETCH_TIMER } from '../../utils/helper';

export const useReview = (id) => {
     const { status, data: reviews } = useQuery({
          queryKey: ['review'],
          queryFn: () => getReview(id),

          refetchInterval: REFETCH_TIMER,
     });

     return { status, reviews };
};
