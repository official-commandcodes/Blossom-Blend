import { Link } from 'react-router-dom';

const Logo = () => {
     return (
          <Link to='/' className='flex items-center'>
               <img
                    src='/blossomblend.png'
                    alt='BlossomBlend Photo'
                    className='w-10 h-16 object-cover md:h-20 md:w-12'
               />
               <span className='text-[12px] md:text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-600'>
                    Blossom Blend
               </span>
          </Link>
     );
};

export default Logo;
