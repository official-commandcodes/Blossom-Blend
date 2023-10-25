const ActionButton = ({ children, onClick, disabled }) => {
     return (
          <button
               disabled={disabled}
               onClick={onClick}
               className={`bg-orange-600 hover:bg-orange-800 px-2 py-1 text-[13px] text-orange-100 flex justify-center items-center rounded-md w-full uppercase transition-all duration-300 ${
                    disabled ? 'cursor-not-allowed' : 'cursor-pointer'
               }`}
          >
               {children}
          </button>
     );
};

export default ActionButton;
