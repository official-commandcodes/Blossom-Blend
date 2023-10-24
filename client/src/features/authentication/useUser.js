import { useQuery } from '@tanstack/react-query';
import { getLoggedInUser } from '../../services/apiAuth';

export const useUser = () => {
     const { status, data: user } = useQuery({
          queryKey: ['user'],
          queryFn: getLoggedInUser,
     });

     return { status, user };
};
