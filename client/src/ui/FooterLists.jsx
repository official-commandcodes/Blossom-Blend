import LinkItem from './LinkItem';

const FooterLists = ({ header, navigation }) => {
     return (
          <ul className='flex flex-col space-y-2 font-light my-4'>
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
