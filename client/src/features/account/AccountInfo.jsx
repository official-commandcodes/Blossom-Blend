import { useState } from 'react';

const AccountInfo = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [address, setAddress] = useState('');
     const [day, setDay] = useState('');
     const [month, setMonth] = useState('');
     const [year, setYear] = useState('');

     console.log(name);
     console.log(email);

     return (
          <div className='flex flex-col gap-4 py-4 px-3 divide-y'>
               <h1 className='text-[24px] font-bold'>Account Information</h1>

               <div className='flex gap-3 items-center pt-4'>
                    <img
                         src='/user.jpg'
                         alt='User profile image'
                         className='w-32 h-32 rounded-full'
                    />

                    <input
                         type='file'
                         className='block w-full text-sm text-orange-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition-all duration-300'
                    />
               </div>

               <div className='flex flex-col gap-4 pt-4'>
                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              Full Name{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='text'
                              id='username'
                              defaultValue={'Musa Abdulkabir Adekunle'}
                              onChange={(e) => setName(e.target.value)}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              Email Address{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='text'
                              id='username'
                              defaultValue={'mussabdulkabeer19@gmail.com'}
                              onChange={(e) => setEmail(e.target.value)}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              Address <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='text'
                              id='username'
                              defaultValue={'No 35, Alaafia street'}
                              onChange={(e) => setAddress(e.target.value)}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              Phone Number{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='text'
                              id='username'
                              defaultValue={'No 35, Alaafia street'}
                              onChange={(e) => setStreetAddress(e.target.value)}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              B.O.D <span className='text-orange-500'>*</span>
                         </label>

                         <div className='flex gap-3'>
                              <input
                                   type='text'
                                   id='username'
                                   defaultValue={7}
                                   onChange={(e) => setDay(e.target.value)}
                                   max={2}
                                   className='w-16 outline-none px-3 py-2 rounded-md text-[14px] font-light italic text-center'
                              />

                              <input
                                   type='text'
                                   id='username'
                                   defaultValue={8}
                                   onChange={(e) => setMonth(e.target.value)}
                                   max={2}
                                   className='w-16 outline-none px-3 py-2 rounded-md text-[14px] font-light italic text-center'
                              />

                              <input
                                   type='text'
                                   id='username'
                                   defaultValue={2001}
                                   onChange={(e) => setYear(e.target.value)}
                                   max={4}
                                   className='w-16 outline-none px-3 py-2 rounded-md text-[14px] font-light italic text-center'
                              />
                         </div>
                    </div>
               </div>

               <form className='flex flex-col gap-4 pt-4'>
                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              Current Password{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='password'
                              id='username'
                              defaultValue={'Musa Abdulkabir Adekunle'}
                              onChange={(e) => setName(e.target.value)}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              New Password{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='password'
                              id='username'
                              defaultValue={'Musa Abdulkabir Adekunle'}
                              onChange={(e) => setName(e.target.value)}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                         />
                    </div>

                    <div className='grid grid-cols-4 items-center'>
                         <label
                              htmlFor='username'
                              className='text-[15px] font-medium'
                         >
                              Confirm New Password{' '}
                              <span className='text-orange-500'>*</span>
                         </label>
                         <input
                              type='password'
                              id='username'
                              defaultValue={'Musa Abdulkabir Adekunle'}
                              onChange={(e) => setName(e.target.value)}
                              className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                         />
                    </div>
               </form>
          </div>
     );
};

export default AccountInfo;
