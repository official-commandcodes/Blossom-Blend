import { cloneElement, createContext, useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FAQContext = createContext();

export const FAQ = ({ children }) => {
     const [open, setOpen] = useState(null);

     const close = () => setOpen('');

     console.log(open);

     return (
          <FAQContext.Provider value={{ open, close, setOpen }}>
               <li className='w-5/12 bg-gray-100'>{children}</li>
          </FAQContext.Provider>
     );
};

const Button = ({ children, id }) => {
     const { setOpen } = useContext(FAQContext);
     const [plus, setPlus] = useState(false);

     const openValue = id && !plus ? id : null;

     return cloneElement(
          children,
          {
               onClick: () => {
                    setOpen(openValue);
                    setPlus((plus) => !plus);
               },
          },

          id && plus ? <AiOutlineMinus /> : <AiOutlinePlus />
     );
};

const Body = ({ children, window }) => {
     const { open } = useContext(FAQContext);

     return (
          <div
               className={`font-thin px-4 py-3 text-sm leading-8 ${
                    window !== open ? 'hidden' : 'flex'
               } transition-all duration-300`}
          >
               {children}
          </div>
     );
};

FAQ.Button = Button;
FAQ.Body = Body;

export default FAQ;
