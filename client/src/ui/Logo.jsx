import { Link } from 'react-router-dom';

const Logo = () => {
     return (
          <Link to='/' className='flex items-center'>
               <img
                    src='/blossomblend.png'
                    alt='BlossomBlend Photo'
                    className='w-12 h-20 object-cover'
               />
               <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-600'>
                    Blossom Blend
               </span>
          </Link>
     );
};

export default Logo;
