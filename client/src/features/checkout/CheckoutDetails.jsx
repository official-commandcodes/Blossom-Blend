import ActionButton from '../../ui/ActionButton';

const CheckoutDetails = () => {
     return (
          <div className='border-[1px] border-gray-300 p-3 rounded-md'>
               <h2 className='text-[20px] font-medium]'>2. Order Summary</h2>
               <div className='py-6 space-y-4'>
                    <div className='px-4 py-3 flex border-[1px] border-gray-300 rounded-md'>
                         <img
                              src='/markup-1.png'
                              alt=''
                              className='w-24 h-24 object-cover'
                         />

                         <div>
                              <h5 className='font-medium text-[18px]'>
                                   10000mah Power-Bank OPB-P118D
                              </h5>

                              <p className='font-light text-[14px]'>
                                   QTY: <span>2</span>
                              </p>

                              <p className='font-light text-[14px]'>
                                   Price: <span># 200</span>
                              </p>
                         </div>
                    </div>

                    <div className='px-4 py-3 flex border-[1px] border-gray-300 rounded-md'>
                         <img
                              src='/markup-1.png'
                              alt=''
                              className='w-24 h-24 object-cover'
                         />

                         <div>
                              <h5 className='font-medium text-[18px]'>
                                   10000mah Power-Bank OPB-P118D
                              </h5>

                              <p className='font-light text-[14px]'>
                                   QTY: <span>2</span>
                              </p>

                              <p className='font-light text-[14px]'>
                                   Price: <span># 200</span>
                              </p>
                         </div>
                    </div>
               </div>

               <ActionButton>Modify Cart</ActionButton>
          </div>
     );
};

export default CheckoutDetails;
