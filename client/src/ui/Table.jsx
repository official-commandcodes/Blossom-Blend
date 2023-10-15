import { createContext } from 'react';

const TableContext = createContext();

const Table = ({ children }) => {
     return (
          <TableContext.Provider value={{}}>{children}</TableContext.Provider>
     );
};

const Header = ({ children }) => {
     return <div className='grid grid-cols-8 px-3'>{children}</div>;
};

const Body = ({ children }) => {
     // Use render method
     return (
          <ul className='h-96 overflow-y-scroll bg-gray-100 rounded-sm divide-y-[1px]'>
               {children}
          </ul>
     );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
