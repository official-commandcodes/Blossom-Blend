import { Link } from 'react-router-dom';

const AuthHeader = ({ header, to, text }) => {
     return (
          <div className='text-gray-200'>
               <h2 className='text-[28px] font-bold text-center'>{header}</h2>
               <p className='text-[12px] text-center'>
                    or{' '}
                    <Link to={to} className='underline text-blue-700'>
                         {text}
                    </Link>
               </p>
          </div>
     );
};

export default AuthHeader;
