import CheckoutCustomer from './CheckoutCustomer';
import CheckoutDetails from './CheckoutDetails';
import CheckoutForm from './CheckoutForm';

const CheckOut = () => {
     return (
          <div className='space-y-6'>
               <CheckoutCustomer />
               <CheckoutDetails />
               <CheckoutForm />
          </div>
     );
};

export default CheckOut;
