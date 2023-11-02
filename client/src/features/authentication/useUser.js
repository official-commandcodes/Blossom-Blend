import { useQuery } from '@tanstack/react-query';
import { getLoggedInUser } from '../../services/apiAuth';
import { REFETCH_TIMER } from '../../utils/helper';

export const useUser = () => {
     const { status, data: user } = useQuery({
          queryKey: ['user'],
          queryFn: getLoggedInUser,

          refetchInterval: REFETCH_TIMER,
     });

     return { status, user };
};
