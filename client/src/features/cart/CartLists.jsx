import { MdCancel } from 'react-icons/md';
import QuantityButton from '../../ui/QuantityButton';
import { Link } from 'react-router-dom';

const CartLists = () => {
     return (
          <section className='px-2'>
               <div className='grid grid-cols-6 gap-2 text-[17px] font-medium py-5'>
                    <div className='col-span-2'>Item</div>
                    <div className=''>Price</div>
                    <div className='justify-self-center '>Quantity</div>
                    <div className='justify-self-center'>Total</div>
                    <div className='justify-self-center'>Discard</div>
               </div>

               <ul className='flex flex-col'>
                    <li className='grid grid-cols-6 gap-2 items-center py-1 border-t-[1px] border-b-[1px]'>
                         <Link
                              to='/products/1'
                              className='flex items-center col-span-2'
                         >
                              <img
                                   src='/markup-2.png'
                                   alt='Markup'
                                   className='w-32 h-32 object-cover'
                              />
                              <h3 className='font-medium text-xl'>
                                   La Mer Crème de la Mer.
                              </h3>
                         </Link>
                         <div className='text-[17px] font-light'>$499.79</div>
                         <div className='justify-self-center'>
                              <QuantityButton />
                         </div>
                         <div className='justify-self-center text-[17px] font-light'>
                              $499.79
                         </div>
                         <div className='justify-self-center text-[25px] cursor-pointer text-orange-800'>
                              <MdCancel />
                         </div>
                    </li>

                    <li
                         to='/products/1'
                         className='grid grid-cols-6 gap-2 items-center py-1 border-t-[1px] border-b-[1px]'
                    >
                         <div className='flex items-center col-span-2'>
                              <img
                                   src='/markup-2.png'
                                   alt='Markup'
                                   className='w-32 h-32 object-cover'
                              />
                              <h3 className='font-medium text-xl'>
                                   La Mer Crème de la Mer.
                              </h3>
                         </div>

                         <div className='text-[17px] font-light'>$499.79</div>

                         <div className='justify-self-center'>
                              <QuantityButton />
                         </div>

                         <div className='justify-self-center text-[17px] font-light'>
                              $499.79
                         </div>

                         <div className='justify-self-center text-[25px] cursor-pointer text-orange-800'>
                              <MdCancel />
                         </div>
                    </li>
               </ul>
          </section>
     );
};

export default CartLists;
