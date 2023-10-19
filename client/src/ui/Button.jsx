const Button = ({ children, onClick }) => {
     return (
          <button
               onClick={onClick}
               className='text-[15px] py-2 px-3 font-medium bg-orange-400 rounded-sm flex justify-center items-center gap-2 text-gray-700'
          >
               {children}
          </button>
     );
};

export default Button;
