const Review = ({ review }) => {
     return (
          <li className='bg-gray-200 rounded-md p-4 flex flex-col space-y-4'>
               <div className='flex items-center space-x-4'>
                    <img
                         src='/user.jpg'
                         alt='User'
                         className='w-16 h-16 rounded-full'
                    />
                    <div>
                         <h3 className='font-medium text-[16px]'>Musa Bako</h3>
                         <span>star</span>
                    </div>
               </div>
               <p className='text-[15px] font-light'>{review.review}</p>

               <span className='font-thin text-[13px]'>06-15-2030</span>
          </li>
     );
};

export default Review;
