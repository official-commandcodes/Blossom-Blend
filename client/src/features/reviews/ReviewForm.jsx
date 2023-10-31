import { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { useForm } from 'react-hook-form';

import { useCreateReview } from './useCreateReview';
import { useUser } from '../authentication/useUser';
import ActionButton from '../../ui/ActionButton';
import RatingReview from '../../ui/RatingReview';
import Spinner from '../../ui/Spinner';

const ReviewForm = ({ onCloseTab, id }) => {
     const { status: creating, createReview } = useCreateReview();
     const { user } = useUser();
     const [ratings, setRatings] = useState(null);
     const {
          register,
          formState: { errors },
          handleSubmit,
     } = useForm();

     const onSubmit = (data) => {
          if (!data.review || !ratings) return;

          createReview(
               {
                    review: data.review,
                    product: id,
                    rating: ratings,
                    user: user.id,
               },
               {
                    onSuccess: () => {
                         onCloseTab();
                    },
               }
          );
     };

     return (
          <form
               className='w-[40rem] h-full bg-white px-9 py-8 flex flex-col space-y-4 rounded-md'
               onSubmit={handleSubmit(onSubmit)}
          >
               <div className='flex justify-between items-center'>
                    <h1 className='font-medium text-[21px]'>Write Review</h1>

                    <span
                         onClick={onCloseTab}
                         className={`font-medium text-[24px] cursor-pointer hover:bg-gray-200 transition-all duration-300 text-orange-600`}
                    >
                         <LiaTimesSolid />
                    </span>
               </div>

               <div className='flex space-x-1 items-center'>
                    <span className='text-[15px]'>Choose a rating:</span>
                    <RatingReview length={5} setRatings={setRatings} />
               </div>

               <div className='flex flex-col space-y-3'>
                    <label htmlFor='review'>Review</label>

                    <textarea
                         name='review'
                         id='review'
                         cols='30'
                         rows='10'
                         className='max-h-[100px] rounded-sm bg-gray-200 border-gray-300 focus:border-[2px]  focus:border-orange-700 focus:ring-0 transition-colors duration-300 text-[13px]'
                         {...register('review', {
                              required: 'Review is required',
                              minLength: [
                                   10,
                                   'Review length must be greater than 10',
                              ],
                         })}
                    ></textarea>
                    {errors?.review && (
                         <span className='text-[12px] text-red-400'>
                              {errors.review.message}
                         </span>
                    )}
               </div>

               <div className='flex justify-between space-x-4'>
                    <ActionButton>
                         {creating === 'pending' ? (
                              <Spinner w='20px' h='25px' />
                         ) : (
                              'Submit'
                         )}
                    </ActionButton>
                    <ActionButton onClick={onCloseTab}>Discard</ActionButton>
               </div>
          </form>
     );
};

export default ReviewForm;
