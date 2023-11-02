import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Review from './Review';
import { useReview } from './useReview';

const Reviews = ({ id }) => {
     const { status, reviews } = useReview(id);

     return (
          <div className='px-28 space-y-6 py-10'>
               <h1 className='font-medium text-[19px]'>Reviews</h1>

               <ul className='flex flex-col space-y-6'>
                    {status === 'pending' ? (
                         <>
                              <Skeleton height='20px' />
                              <Skeleton height='60px' />
                         </>
                    ) : reviews.length === 0 ? (
                         <h2 className='px-4'>No review yet!</h2>
                    ) : (
                         reviews.map((review, i) => (
                              <Review
                                   key={i + 1}
                                   review={review}
                                   username={review.user.name}
                                   photo={review.user.photo}
                                   rate={review.rating}
                                   date={review.createdAt}
                              />
                         ))
                    )}
               </ul>
          </div>
     );
};

export default Reviews;
