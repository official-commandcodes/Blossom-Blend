import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
     useEffect(() => {
          document.title = 'Blossom Blend | Page Not Found';
     }, []);

     return (
          <div className='px-40 py-16 bg-orange-100 flex flex-col space-y-4 justify-center font-light text-[14px]'>
               <img
                    src='/404-error.png'
                    alt='Page Not Found'
                    className='w-[200px] h-[200px] object-cover'
               />
               <h1 className='font-medium text-[24px]'>
                    {' '}
                    Oops! Page Not Found
               </h1>
               <p>
                    It seems like you've stumbled upon a page that doesn't
                    exist. Don't worry, it happens to the best of us. Let's get
                    you back on track:
               </p>

               <ul className='list-disc'>
                    <li>
                         You can{' '}
                         <Link to='/' className='text-blue-500 underline'>
                              return to the homepage{' '}
                         </Link>
                         and start fresh.
                    </li>

                    <li>
                         If you believe this is a mistake, please{' '}
                         <Link
                              to='/contact-us'
                              className='text-blue-500 underline'
                         >
                              contact our support team
                         </Link>{' '}
                         for assistance.
                    </li>

                    <li>
                         Want to explore more?{' '}
                         <Link
                              to='/products'
                              className='text-blue-500 underline'
                         >
                              Check out our popular products.
                         </Link>
                    </li>
               </ul>

               <p>
                    We apologize for any inconvenience. Thank you for visiting
                    our website.
               </p>
          </div>
     );
};

export default PageNotFound;
