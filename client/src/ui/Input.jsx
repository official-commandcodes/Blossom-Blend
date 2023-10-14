import { useState } from 'react';

const Input = ({ label }) => {
     const [focused, setFocused] = useState(false);

     const handleFocus = () => {
          setFocused(true);
     };

     const handleBlur = (e) => {
          if (e.target.value) return;

          setFocused(false);
     };

     const handleChange = (e) => {
          if (!e.target.value) return;

          setFocused(true);
     };

     return (
          <div className='w-full relative justify-center items-center'>
               <label
                    className={`absolute font-thin ${focused ? '-top-[10px] left-[16px]': 'left-[19px] top-[15px]'} text-[13px] px-[6px] py-[1px] bg-[#efefef] transition-all duration-300`} // prettier-ignore
               >
                    {label}
                    <span className='text-orange-600 ml-[2px]'>*</span>
               </label>
               <input
                    type='text'
                    className='bg-[#efefef] text-[#1f1f1f] px-4 py-4 rounded-md w-full outline-none ring-2 ring-offset-5 ring-gray-300 text-[12px] transition-all duration-300 autofill:shadow-[inset_0_0_0px_1000px_#efefef]'
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
               />
          </div>
     );
};

export default Input;
