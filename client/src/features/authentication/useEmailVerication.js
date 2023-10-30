import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { verifyEmail } from '../../services/apiAuth';

export const useEmailVerication = () => {
     const { userId, token } = useParams();

     const { status, mutate: verify } = useMutation({
          mutationFn: () => verifyEmail({ userId, token }),
     });

     return { status, verify };
};
