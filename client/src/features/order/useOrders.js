import { useQuery } from '@tanstack/react-query';
import { getAllOrders } from '../../services/apiOrders';

export const useOrders = () => {
     const { status, data: orders } = useQuery({
          queryKey: ['orders'],
          queryFn: getAllOrders,

          refetchInterval: 6000,
     });

     return { status, orders };
};
