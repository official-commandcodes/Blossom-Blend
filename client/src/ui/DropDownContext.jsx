import { createContext, useContext, useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

const DropDownContext = createContext();

const DropDownProvider = ({ children }) => {
     const [dropDown, setDropDown] = useState(null);

     return (
          <DropDownContext.Provider value={{ dropDown, setDropDown }}>
               {children}
          </DropDownContext.Provider>
     );
};

const Button = ({ children, account }) => {
     const { setDropDown } = useContext(DropDownContext);

     return (
          <button
               className='flex space-x-1 items-center  hover:text-orange-950 transition-all duration-300'
               onClick={() => setDropDown(account)}
          >
               {children}
          </button>
     );
};

const DropDown = ({ children, window }) => {
     const { dropDown, setDropDown } = useContext(DropDownContext);
     const ref = useClickOutside(dropDown, setDropDown);

     if (!dropDown || dropDown !== window) return null;

     return (
          <ul
               ref={ref}
               className='absolute top-8 bg-gray-100 w-[200px] flex flex-col gap-4 right-0 divide-y-[1px] py-1 rounded-md'
          >
               {children}
          </ul>
     );
};

DropDownProvider.Button = Button;
DropDownProvider.DropDown = DropDown;

export default DropDownProvider;
