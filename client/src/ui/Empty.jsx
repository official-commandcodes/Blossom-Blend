import { Link } from 'react-router-dom';

const Empty = ({ type, image }) => {
     return (
          <div className='bg-gray-50 py-5 flex justify-center items-center flex-col space-y-3 rounded-md shadow-lg shadow-orange-200/30'>
               <img
                    src={image}
                    alt='Empty Cart'
                    className='w-44 h-44 bg-orange-50 rounded-full'
               />
               <h3 className='font-medium text-[15px]'>
                    Your {type} is empty!
               </h3>
               <p className='font-light text-[13px]'>
                    Browse our categories and discover our best deals!
               </p>
               <Link
                    to='/'
                    className='px-8 py-2 bg-orange-400 text-orange-50 rounded-md hover:bg-orange-600 transition-all duration-300'
               >
                    Start shopping
               </Link>
          </div>
     );
};

export default Empty;
