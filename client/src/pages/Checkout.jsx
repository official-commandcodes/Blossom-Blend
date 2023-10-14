import CartSummary from '../features/cart/CartSummary';
import Shipping from '../ui/Shipping';

const Checkout = () => {
     return (
          <div className='flex gap-2 px-16 py-10'>
               <Shipping />

               <div className='bg-gray-300 w-[2px]'></div>
               <section className='basis-1/4 p-2'>
                    <CartSummary />
               </section>
          </div>
     );
};

export default Checkout;
