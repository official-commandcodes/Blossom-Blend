import { useEffect, useRef } from 'react';

export const useDropDown = (dropDown, setDropDown) => {
     const ref = useRef();

     useEffect(() => {
          const el = ref.current;

          if (dropDown) {
               document.addEventListener(
                    'click',
                    (e) => {
                         const fact = e.target.closest('.drop');

                         if (!fact && el) setDropDown(false);

                         return;
                    },
                    true
               );

               return () => {
                    document.removeEventListener(
                         'click',
                         (e) => {
                              const fact = e.target.closest('.drop');

                              if (!fact && el) setDropDown(false);

                              return;
                         },
                         true
                    );
               };
          }
     }, [dropDown, setDropDown]);

     return { ref };
};
