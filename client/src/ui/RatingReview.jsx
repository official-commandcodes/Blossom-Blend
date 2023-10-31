import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const RatingReview = ({ length, setRatings }) => {
     const [currentStar, setCurrentStar] = useState(null);
     const [active, setActive] = useState(null);

     useEffect(() => {
          setRatings(active);
     }, [setRatings, active]);

     const handleMouseEnter = (num) => {
          setCurrentStar(num);
     };

     const handleMouseLeave = () => {
          setCurrentStar(null);
     };

     const handleRatingsClicked = () => {
          setActive(currentStar);
     };

     return (
          <div className='flex space-x-2'>
               {Array.from({ length }, (_, i) => i + 1).map((item, i) => (
                    <span
                         onMouseEnter={() => handleMouseEnter(i + 1)}
                         onMouseLeave={() => handleMouseLeave()}
                         onClick={handleRatingsClicked}
                         key={i + 1}
                         className={`cursor-pointer ${
                              currentStar === i + 1 || currentStar > i + 1
                                   ? 'text-orange-500'
                                   : 'text-gray-700'
                         } ${
                              active === i + 1 || active > i + 1
                                   ? 'text-orange-500'
                                   : ''
                         } hover:text-orange-500 transition-colors duration-300 text-[19px]`}
                    >
                         <AiFillStar />
                    </span>
               ))}
          </div>
     );
};

export default RatingReview;
