import { Link } from 'react-router-dom';

const LinkItem = ({ children, to }) => {
     return (
          <Link to={to} className='hover:underline'>
               {children}
          </Link>
     );
};

export default LinkItem;
