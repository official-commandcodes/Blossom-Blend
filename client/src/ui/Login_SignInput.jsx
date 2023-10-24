import { useForm } from 'react-hook-form';

const Login_SignInput = ({ icon, label, holder, errors, type }) => {
     const { register } = useForm();

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
                    placeholder={holder}
                    className={`w-full outline-none h-full px-2 placeholder:text-[14px] placeholder:italic italic text-[14px] ${
                         errors?.[label]?.message
                              ? 'border-2 border-red-300'
                              : ''
                    }`}
                    {...register(label, {
                         required: 'FullName is required',
                    })}
               />
          </div>
     );
};

export default Login_SignInput;
