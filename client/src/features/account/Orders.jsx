import Filter from '../../ui/Filter';

const Orders = () => {
     return (
          <div className='px-3 py-4 flex flex-col gap-2'>
               <h1 className='text-[24px] font-bold'>All orders</h1>

               <section className='flex justify-end py-2 mr-6'>
                    <Filter
                         filter={[
                              { label: 'All orders', value: 'all' },
                              { label: 'Completed', value: 'completed' },
                              { label: 'Pending', value: 'pending' },
                              { label: 'Canceled', value: 'Canceled' },
                         ]}
                    />
               </section>

               <div className='flex flex-col gap-3'>
                    <div className='grid grid-cols-8 px-3'>
                         <div className='col-span-3'>Product Name</div>
                         <div className='col-span-2'>Address</div>
                         <div>Date</div>
                         <div>Price</div>
                         <div>Status</div>
                    </div>

                    <ul className='h-96 overflow-y-scroll bg-gray-100 rounded-sm divide-y-[1px]'>
                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   Completed
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   canceled
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   pending
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   pending
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   pending
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   pending
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   pending
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   pending
                              </span>
                         </li>

                         <li className='grid grid-cols-8 text-xs items-center'>
                              <div className='flex items-center col-span-3'>
                                   <img
                                        src='/markup-1.png'
                                        alt=''
                                        className='w-16 h-16 object-cover'
                                   />
                                   <h2 className='font-medium text-[14px]'>
                                        La Mer Crème de la Mer.
                                   </h2>
                              </div>

                              <div className='col-span-2 text-[13px]'>
                                   No 35, Alaafia street
                              </div>
                              <div>jun, 05 2023</div>
                              <div>$4000</div>

                              <span className='w-20 h-7 rounded-full bg-orange-400 flex justify-center items-center text-[10px]'>
                                   pending
                              </span>
                         </li>
                    </ul>
               </div>
          </div>
     );
};

export default Orders;
