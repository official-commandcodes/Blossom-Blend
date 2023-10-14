import { useState } from 'react';

const ProductDetail_Side_Left = () => {
     const [active, setActive] = useState(1);

     return (
          <div className='flex flex-col gap-3'>
               <div className='flex items-center justify-center'>
                    <img
                         src={`/markup-${active}.png`}
                         alt='Markup'
                         className='bg-gray-300 object-cover w-full'
                    />
               </div>

               <div className='grid grid-flow-col gap-x-2'>
                    <div
                         className={`bg-gray-300 cursor-pointer ${
                              Object.is(active, 1)
                                   ? 'border-[1px] border-gray-400'
                                   : ''
                         }`}
                         onClick={() => setActive(1)}
                    >
                         <img src='/markup-1.png' alt='' />
                    </div>

                    <div
                         className={`bg-gray-300 cursor-pointer ${
                              Object.is(active, 2)
                                   ? 'border-[1px] border-gray-400'
                                   : ''
                         }`}
                         onClick={() => setActive(2)}
                    >
                         <img src='/markup-2.png' alt='' />
                    </div>
                    <div
                         className={`bg-gray-300 cursor-pointer ${
                              Object.is(active, 3)
                                   ? 'border-[1px] border-gray-400'
                                   : ''
                         }`}
                         onClick={() => setActive(3)}
                    >
                         <img src='/markup-3.png' alt='' />
                    </div>
               </div>
          </div>
     );
};

export default ProductDetail_Side_Left;
