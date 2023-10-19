import { useSearchParams } from 'react-router-dom';

export const useCustomParams = (name) => {
     const [searchParams] = useSearchParams();

     const params = searchParams.get(name);

     return params;
};
