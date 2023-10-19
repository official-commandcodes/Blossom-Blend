import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoading = ({ length }) => {
     return (
          <div className='grid grid-cols-6 gap-x-6 gap-y-10 py-2'>
               {Array.from({ length }, (_, i) => (
                    <div key={i + 1}>
                         <Skeleton className='h-36' />
                         <Skeleton count={4} height='3' />
                    </div>
               ))}
          </div>
     );
};

export default SkeletonLoading;
