import { useEffect } from 'react';
import Orders from '../features/order/Orders';

const AccountOrders = () => {
     useEffect(() => {
          document.title = `Blossom Blend | Account orders`;
     }, []);

     return <Orders />;
};

export default AccountOrders;
