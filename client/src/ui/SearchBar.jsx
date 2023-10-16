const SearchBar = () => {
     return (
          <div className='flex items-center gap-4'>
               <input
                    type='text'
                    placeholder='Search for any product here ...'
                    className={`bg-gray-100 border-none transition-all duration-1000 ease-in-out text-xs px-4 py-2 outline-none rounded-sm italic focus:ring-1 focus:ring-orange-300 focus:border-[1px] w-72 focus:w-80`}
               />

               <button className='bg-orange-400 py-1 w-[100px] h-[33px] flex justify-center items-center rounded-[3px] text-gray-100 hover:bg-orange-600 active:bg-orange-600 transition-all duration-300'>
                    search
               </button>
          </div>
     );
};

export default SearchBar;
