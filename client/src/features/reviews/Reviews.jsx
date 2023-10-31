import Review from './Review';

const Reviews = () => {
     return (
          <div className='px-28 space-y-6 py-10'>
               <h1 className='font-medium text-[19px]'>Reviews</h1>

               <ul className='flex flex-col space-y-6'>
                    <Review />
               </ul>
          </div>
     );
};

export default Reviews;
