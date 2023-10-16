import { createContext, useContext, useState } from 'react';

const DropDownContext = createContext();

export const DropDownContextProvider = ({ children }) => {
     const [dropDown, setDropDown] = useState(false);

     const open = () => setDropDown((dropDown) => !dropDown);

     return (
          <DropDownContext.Provider value={{ dropDown, open }}>
               {children}
          </DropDownContext.Provider>
     );
};

export const useDropDown = () => {
     const dropDown = useContext(DropDownContext);

     if (!dropDown) {
          throw new Error('Context is not provider here');
     }

     return dropDown;
};
