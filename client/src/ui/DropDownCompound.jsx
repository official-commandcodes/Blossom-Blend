import { cloneElement, createContext, useContext, useState } from 'react';

const DropDownContext = createContext();

const DropDownCompound = ({ children }) => {
 const [dropDown, setDropDown] = useState(false);

 const open = () => setDropDown((dropDown) => !dropDown);

 return (
  <DropDownContext.Provider value={{ dropDown, open }}>
   {children}
  </DropDownContext.Provider>
 );
};

const Button = ({ children }) => {
 const { open } = useContext(DropDownContext);

 return cloneElement(children, { onClick: open });
};

const DropDown = ({ children }) => {
 const { dropDown } = useContext(DropDownContext);

 if (!dropDown) return null;

 return <div>{children}</div>;
};

DropDownCompound.Button = Button;
DropDownCompound.DropDown = DropDown;

export default DropDownCompound;
