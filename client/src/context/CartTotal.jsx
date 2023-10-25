import { createContext, useState } from 'react';

export const CartTotalContext = createContext();

export const CartTotalProvider = ({ children }) => {
     const [total, setTotal] = useState([]);

     const sum = total
          .filter((t) => isFinite(t))
          .reduce((acc, cur) => acc + cur, 0);

     console.log(sum);

     return (
          <CartTotalContext.Provider value={{ sum, setTotal }}>
               {children}
          </CartTotalContext.Provider>
     );
};
