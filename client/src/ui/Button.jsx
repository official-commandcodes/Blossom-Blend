const Button = ({ children, onClick, type }) => {
     return (
          <button
               type={type}
               onClick={onClick}
               className='text-[15px] py-2 px-4 font-medium bg-orange-50 rounded-sm text-orange-600 hover:bg-orange-100 self-center w-5/12 transition-all duration-300 ease-in-out cursor-pointer flex justify-center items-center'
          >
               {children}
          </button>
     );
};

export default Button;
