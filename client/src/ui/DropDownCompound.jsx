import { cloneElement, createContext, useContext, useState } from 'react';
import { useDropDown } from '../hooks/useDropDown';

const DropDownContext = createContext();

const DropDownCompound = ({ children }) => {
     const [dropDown, setDropDown] = useState(false);

     return (
          <DropDownContext.Provider value={{ dropDown, setDropDown }}>
               {children}
          </DropDownContext.Provider>
     );
};

const Button = ({ children }) => {
     const { setDropDown } = useContext(DropDownContext);

     return cloneElement(children, { onClick: () => setDropDown(true) });
};

const DropDown = ({ children }) => {
     const { dropDown, setDropDown } = useContext(DropDownContext);
     const { ref } = useDropDown(dropDown, setDropDown);

     if (!dropDown) return null;

     return (
          <div ref={ref} className='drop'>
               {children}
          </div>
     );
};

DropDownCompound.Button = Button;
DropDownCompound.DropDown = DropDown;

export default DropDownCompound;
