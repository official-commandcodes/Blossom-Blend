import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createReview as createReviewAPI } from '../../services/apiReviews';

export const useCreateReview = () => {
     const queryClient = useQueryClient();

     const { status, mutate: createReview } = useMutation({
          mutationFn: createReviewAPI,

          onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ['reviews'] });
               queryClient.invalidateQueries({ queryKey: ['user'] });
          },

          onError: (err) => {
               console.log(err);
               toast.error(err.message);
          },
     });

     return { status, createReview };
};
