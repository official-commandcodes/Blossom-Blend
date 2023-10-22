const Login_SignInput = ({ icon, label, type }) => {
     return (
          <div className='flex items-center bg-orange-50 h-10'>
               <label
                    htmlFor={label}
                    className='text-[19px] px-2 text-orange-700'
               >
                    {icon}
               </label>
               <input
                    id={label}
                    type={type}
                    placeholder={label}
                    className='w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic italic text-[14px]'
                    autoComplete='off'
               />
          </div>
     );
};

export default Login_SignInput;
