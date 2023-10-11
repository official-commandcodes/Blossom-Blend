import { useEffect, useRef } from 'react';

export const useClickOutside = (state, setState) => {
     const ref = useRef();

     useEffect(() => {
          const el = ref.current;

          if (state) {
               document.addEventListener(
                    'click',
                    (e) => {
                         const fact = e.target.closest('.drop');

                         if (!fact && el) setState(false);

                         return;
                    },
                    true
               );

               return () => {
                    document.removeEventListener(
                         'click',
                         (e) => {
                              const fact = e.target.closest('.drop');

                              if (!fact && el) setState(false);

                              return;
                         },
                         true
                    );
               };
          }
     }, [state, setState]);

     return { ref };
};
