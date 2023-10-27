import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { checkout as checkoutAPI } from '../../services/apiCheckout';

export const useCheckout = () => {
     const queryClient = useQueryClient();

     const { status, mutate: checkout } = useMutation({
          mutationFn: checkoutAPI,

          onSuccess: (data) => {
               queryClient.invalidateQueries({ queryKey: ['user'] });
               window.location.href = data.url;
          },

          onError: (err) => {
               toast.error(err.message, {
                    className: 'text-[12px]',
               });
          },
     });

     return { status, checkout };
};
