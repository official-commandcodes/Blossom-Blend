import LinkItem from './LinkItem';

const FooterLists = ({ header, navigation }) => {
     return (
          <ul className='flex flex-col gap-2 font-light'>
               <h4 className='font-medium text-sm'>{header}</h4>

               {navigation.map(({ label, link }, i) => (
                    <LinkItem to={link} key={i + 1}>
                         <li>{label}</li>
                    </LinkItem>
               ))}
          </ul>
     );
};

export default FooterLists;
