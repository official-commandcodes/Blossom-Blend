import { useEffect } from 'react';
import WishLists from '../features/wishlist/WishLists';

const AccountWishLists = () => {
     useEffect(() => {
          document.title = `Blossom Blend | Account wishlists`;
     }, []);

     return (
          <div className='px-4 py-2 flex flex-col space-y-4'>
               <h1 className='text-[24px] font-medium'>My WishList</h1>

               <WishLists />
          </div>
     );
};

export default AccountWishLists;
