import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { checkParameters } from '../../services/apiAuth';

export const useUpdateReset = () => {
     const { username, token } = useParams();

     const { status, mutate: verifyParameters } = useMutation({
          mutationFn: () => checkParameters({ username, token }),

          onError: (err) => {
               console.log(err);
          },
     });

     return { status, verifyParameters };
};
