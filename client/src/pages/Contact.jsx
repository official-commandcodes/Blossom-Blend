import { Link } from 'react-router-dom';
import Input from '../ui/Input';

const Contact = () => {
     return (
          <div className='px-16 py-10 flex flex-col gap-8'>
               <h2 className='font-medium text-[24px]'>Contact Us </h2>

               <div className='flex items-center px-7 gap-20'>
                    <section className='flex-1 font-light text-[13px] divide-y-[1px]'>
                         <div className='py-4 flex flex-col gap-3'>
                              <p>
                                   <span className='font-medium text-[14px]'>
                                        Phone:{' '}
                                   </span>
                                   <Link
                                        to='tel:+2348107559614'
                                        className='text-blue-800 underline'
                                   >
                                        +234 8107559614
                                   </Link>
                              </p>

                              <p>
                                   <span className='font-medium text-[14px]'>
                                        Hour of operation:{' '}
                                   </span>
                                   9am-4pm, Monday-Friday
                              </p>

                              <p className='leading-6'>
                                   BlossomBlend enterprises, <br /> No 35
                                   Alaafia Street, <br />
                                   osogbo, osun state
                              </p>
                         </div>

                         <div className='leading-8 py-4'>
                              <p>
                                   Check out our{' '}
                                   <Link
                                        className='text-blue-800 underline'
                                        to='#faq'
                                   >
                                        FAQ section
                                   </Link>
                              </p>

                              <p>
                                   Email us{' '}
                                   <Link
                                        className='text-blue-800 underline'
                                        to='mailto:musaabdulkabeer19@gmail.com'
                                   >
                                        here
                                   </Link>{' '}
                                   (Please allow one business to respond)
                              </p>
                         </div>
                    </section>

                    <section className='flex-1 flex flex-col gap-5'>
                         <p className='font-light text-[15px]'>
                              We will want to hear from you, please feel free to
                              email us at{' '}
                              <Link
                                   className='text-blue-800 underline'
                                   to='mailto:musaabdulkabeer19@gmail.com'
                              >
                                   here
                              </Link>
                              , or speak you mind below.
                         </p>

                         <form className='flex flex-col gap-4'>
                              <Input label='NAME' />
                              <Input label='EMAIL' />
                              <Input label='SUBJECT' />

                              <textarea
                                   className='bg-[#efefef] text-[#1f1f1f] px-4 py-4 rounded-md w-full outline-none ring-2 ring-offset-5 ring-gray-300 text-[12px] transition-all duration-300 placeholder:text-gray-700 placeholder:font-light placeholder:text-[14px]'
                                   placeholder="What's on your mind?"
                                   rows='4'
                              ></textarea>
                              <button
                                   type='submit'
                                   className='w-40 h-10 rounded-md bg-orange-600 text-gray-100'
                              >
                                   Submit
                              </button>
                         </form>
                    </section>
               </div>
          </div>
     );
};

export default Contact;
