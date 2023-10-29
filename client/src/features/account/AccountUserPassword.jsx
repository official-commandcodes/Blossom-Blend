const AccountUserPassword = () => {
     return (
          <form className='flex flex-col gap-4 pt-4'>
               <h1 className='text-[15px] font-medium'>
                    Password Authentication
               </h1>

               <div className='grid grid-cols-4 items-center'>
                    <label
                         htmlFor='currentPassword'
                         className='text-[15px] font-medium'
                    >
                         Current Password{' '}
                         <span className='text-orange-500'>*</span>
                    </label>
                    <input
                         type='currentPassword'
                         id='currentPassword'
                         defaultValue={'Musa Abdulkabir Adekunle'}
                         // onChange={(e) => setName(e.target.value)}
                         name='currentPassword'
                         className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                    />
               </div>

               <div className='grid grid-cols-4 items-center'>
                    <label
                         htmlFor='password'
                         className='text-[15px] font-medium'
                    >
                         New Password <span className='text-orange-500'>*</span>
                    </label>
                    <input
                         type='password'
                         id='password'
                         defaultValue={'Musa Abdulkabir Adekunle'}
                         name='password'
                         // onChange={(e) => setName(e.target.value)}
                         className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                    />
               </div>

               <div className='grid grid-cols-4 items-center'>
                    <label
                         htmlFor='passwordConfirm'
                         className='text-[15px] font-medium'
                    >
                         Confirm New Password{' '}
                         <span className='text-orange-500'>*</span>
                    </label>
                    <input
                         type='password'
                         id='passwordConfirm'
                         defaultValue={'Musa Abdulkabir Adekunle'}
                         // onChange={(e) => setName(e.target.value)}
                         name='passwordConfirm'
                         className='col-span-2 outline-none px-3 py-2 rounded-md text-[14px] font-light italic'
                    />
               </div>

               <div>
                    <button className='bg-red-300 w-20 h-8 rounded-md'>
                         update
                    </button>
               </div>
          </form>
     );
};

export default AccountUserPassword;
