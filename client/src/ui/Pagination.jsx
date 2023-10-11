import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Pagination = () => {
     return (
          <section className='flex justify-center items-center py-6'>
               <div className='flex items-center gap-6'>
                    <div className='w-10 h-10 rounded-full border-[1px] border-orange-300 flex justify-center items-center cursor-pointer font-semibold'>
                         <BsChevronLeft />
                    </div>
                    <div className='text-orange-900'>1</div>
                    <div className='w-10 h-10 rounded-full border-[1px] border-orange-300 flex justify-center items-center cursor-pointer font-semibold'>
                         <BsChevronRight />
                    </div>
               </div>
          </section>
     );
};

export default Pagination;
