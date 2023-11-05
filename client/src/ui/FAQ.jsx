import { cloneElement, createContext, useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FAQContext = createContext();

export const FAQ = ({ children }) => {
     const [open, setOpen] = useState(null);

     const close = () => setOpen(null);

     return (
          <FAQContext.Provider value={{ open, close, setOpen }}>
               <li className='border-[1px] border-gray-300  w-full md:w-7/12 bg-gray-100 h-full rounded-sm'>
                    {children}
               </li>
          </FAQContext.Provider>
     );
};

const Button = ({ children, id }) => {
     const { setOpen, open } = useContext(FAQContext);

     return cloneElement(
          children,
          {
               onClick: () => setOpen((open) => (open === id ? null : id)),
          },

          open === id ? <AiOutlineMinus /> : <AiOutlinePlus />
     );
};

const Body = ({ children, window }) => {
     const { open } = useContext(FAQContext);

     if (open !== window) return null;

     return (
          <div className='font-thin px-4 py-3 text-sm leading-8 transition-all duration-700 ease-out'>
               {children}
          </div>
     );
};

FAQ.Button = Button;
FAQ.Body = Body;

export default FAQ;
