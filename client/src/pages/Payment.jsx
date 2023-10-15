import { useState } from 'react';
import Input from '../ui/Input';

function Payment() {
     const [cardNumber, setCardNumber] = useState('');
     const [expiryDate, setExpiryDate] = useState('');
     const [cvv, setCvv] = useState('');

     // Function to handle form submission
     const handleSubmit = (e) => {
          e.preventDefault();
          // Here you would typically send payment data to a payment gateway
     };

     return (
          <section className='px-16 py-6 flex items-center gap-4'>
               <div className='flex-1 flex justify-center '>
                    <img
                         src='/credit_card.png'
                         alt='Credit Card'
                         className='w-full'
                    />
               </div>

               <div className='flex-1'>
                    <form
                         onSubmit={handleSubmit}
                         className='flex flex-col gap-8'
                    >
                         <h1 className='text-[20px] font-medium'>
                              PAYMENT (<span className='font-light'>$5000</span>
                              )
                         </h1>

                         <Input label='CARDHOLDER NAME' />

                         <Input label='CARD NUMBERS' />

                         <div className='flex gap-2'>
                              <Input label='EXPIRE MONTH' />
                              <Input label='EXPIRE YEAR' />
                              <Input label='CVV' />
                         </div>

                         {/* <label>
                              <input
                                   type='text'
                                   value={cardNumber}
                                   onChange={(e) =>
                                        setCardNumber(e.target.value)
                                   }
                                   placeholder='1234 5678 9012 3456'
                                   maxLength='16'
                                   required
                              />
                         </label> */}

                         {/* <label>
                              <input
                                   type='text'
                                   value={expiryDate}
                                   onChange={(e) =>
                                        setExpiryDate(e.target.value)
                                   }
                                   placeholder='MM/YY'
                                   maxLength='5'
                                   required
                              />
                         </label> */}

                         {/* <label>
                              <input
                                   type='text'
                                   value={cvv}
                                   onChange={(e) => setCvv(e.target.value)}
                                   placeholder='123'
                                   maxLength='3'
                                   required
                              />
                         </label> */}

                         <button
                              type='submit'
                              className='bg-orange-900 text-gray-50 w-28 text-[14px] h-9 rounded-md font-light'
                         >
                              Pay Now
                         </button>
                    </form>
               </div>
          </section>
     );
}

export default Payment;
