import { format, parseISO } from 'date-fns';
import { API_URL } from '../../utils/helper';
import Star from '../../ui/Star';

const Review = ({ review, username, photo, rate, date }) => {
     return (
          <li className='bg-gray-200 rounded-md p-4 flex flex-col space-y-4'>
               <div className='flex items-center space-x-4'>
                    <img
                         src={`${API_URL}/users/${photo}`}
                         alt='User'
                         className='w-16 h-16 rounded-full'
                    />
                    <div className='flex flex-col space-y-2'>
                         <h3 className='font-medium text-[16px]'>{username}</h3>
                         <span className='flex space-x-1'>
                              {Array.from(
                                   { length: rate },
                                   (_, i) => i + 1
                              ).map((item) => (
                                   <Star key={item} />
                              ))}
                         </span>
                    </div>
               </div>
               <p className='text-[15px] font-light'>{review.review}</p>

               <span className='font-thin text-[13px]'>
                    {format(parseISO(date), 'MM/dd/yyyy')}
               </span>
          </li>
     );
};

export default Review;
