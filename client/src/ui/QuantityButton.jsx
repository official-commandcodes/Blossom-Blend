import { useState } from 'react';

const QuantityButton = () => {
     const [item, setItem] = useState(1);

     return (
          <div className='w-32 flex justify-between items-center gap-2 bg-orange-800 text-gray-50 px-4 rounded-full'>
               <button
                    className='text-xl font-medium p-2'
                    onClick={() =>
                         setItem((item) => (item === 1 ? item : item - 1))
                    }
               >
                    -
               </button>
               <span>{item}</span>
               <button
                    className='text-xl font-medium p-2'
                    onClick={() => setItem((item) => item + 1)}
               >
                    +
               </button>
          </div>
     );
};

export default QuantityButton;
