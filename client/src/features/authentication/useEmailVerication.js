import { useMutation } from '@tanstack/react-query';
import { verifyEmail } from '../../services/apiAuth';

export const useEmailVerication = () => {
     const { status, mutate: verify } = useMutation({
          mutationFn: verifyEmail,
     });

     return { status, verify };
};
