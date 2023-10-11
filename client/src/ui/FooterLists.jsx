import { Link } from 'react-router-dom';

const FooterLists = ({ header, navigation, tel, email }) => {
     return (
          <ul className='flex flex-col gap-2 font-light'>
               <h4 className='font-medium text-sm'>{header}</h4>

               {navigation.map((nav, i) => (
                    <Link to={tel || email} key={i + 1}>
                         <li>{nav}</li>
                    </Link>
               ))}
          </ul>
     );
};

export default FooterLists;
