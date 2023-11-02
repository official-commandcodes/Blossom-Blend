import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';
import ActionButton from '../ui/ActionButton';

const ReviewContext = createContext();

const ReviewTable = ({ children }) => {
     const [searchParams, setSearchParams] = useSearchParams();

     const params = searchParams.get('reviewTab');

     const setParams = (id) => {
          searchParams.set('reviewTab', id);

          setSearchParams(searchParams);
     };

     const removeParams = () => {
          searchParams.set('reviewTab', '');

          setSearchParams(searchParams);
     };

     return (
          <ReviewContext.Provider value={{ params, setParams, removeParams }}>
               {children}
          </ReviewContext.Provider>
     );
};

const Button = ({ text, id }) => {
     const { setParams } = useContext(ReviewContext);

     return <ActionButton onClick={() => setParams(id)}>{text}</ActionButton>;
};

const Body = ({ children }) => {
     const { params, removeParams } = useContext(ReviewContext);

     if (params === null || params === '') return null;

     return createPortal(
          <div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-white/10 z-40 flex justify-center items-center'>
               <div>
                    {cloneElement(children, {
                         onCloseTab: () => removeParams(),
                    })}
               </div>
          </div>,
          document.body
     );
};

ReviewTable.Button = Button;
ReviewTable.Body = Body;

export default ReviewTable;
