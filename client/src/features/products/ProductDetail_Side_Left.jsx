import { useState } from 'react';
import { API_URL } from '../../utils/helper';

const ProductDetail_Side_Left = ({ image }) => {
     const [active, setActive] = useState(0);

     const handleChange = (value) => {
          setActive(value);
     };

     const lastDashIndex = image[active].lastIndexOf('-');
     const imagePath = image[active].slice(0, lastDashIndex);
     const ext = image[active].split('.').at(-1);

     const imageUrl = `${imagePath}-${active + 1}.${ext}`;

     return (
          <div className='flex flex-col gap-3'>
               <div className='flex items-center justify-center'>
                    <img
                         src={`${API_URL}/products/${imageUrl}`}
                         alt={imageUrl}
                         className='bg-gray-300 w-[500px] h-96 object-cover transition-all duration-500'
                    />
               </div>

               <div className='flex gap-1 justify-center items-center gap-x-2'>
                    {image.map((img, i) => (
                         <div
                              key={i + 1}
                              className={`bg-gray-300 cursor-pointer flex justify-center items-center w-1/3 ${
                                   active === i
                                        ? 'border-[1px] border-gray-400'
                                        : ''
                              }`}
                              onClick={() => handleChange(i)}
                         >
                              <img
                                   src={`${API_URL}/products/${img}`}
                                   alt={img}
                                   className='w-32 h-32'
                              />
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default ProductDetail_Side_Left;
