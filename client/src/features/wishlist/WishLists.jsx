import { useUser } from '../authentication/useUser';
import Empty from '../../ui/Empty';
import WishList from './WishList';

const WishLists = () => {
     const { status, user } = useUser();

     if (status === 'pending') return null;

     if (user.wishlists.length === 0)
          return <Empty type='wishlists' image='/empty.png' />;

     return (
          <ul className='flex flex-col space-y-3'>
               {user.wishlists.map((wishlist, i) => (
                    <WishList key={i + 1} id={wishlist} />
               ))}
          </ul>
     );
};

export default WishLists;
