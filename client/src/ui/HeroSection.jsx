import { Link } from 'react-router-dom';

const HeroSection = () => {
     return (
          <section className='flex bg-gray-200 px-12 h-[630px]'>
               <div className='flex-1 pt-44 px-20'>
                    <h3 className='font-thin text-[38px] leading-[50px]'>
                         Indulge in a world of beauty and self-care curated just
                         for you.
                    </h3>

                    <p className='text-sm font-extralight my-4 leading-6'>
                         Explore our carefully selected collection, sourced from
                         renowned brands and crafted with your well-being in
                         mind. Whether you&apos;re seeking timeless classics or
                         the latest innovations, you&apos;ll find it all here.
                    </p>

                    <Link className='px-4 py-2 rounded-md bg-orange-300 shadow-lg shadow-orange-300/50 uppercase text-[13px]'>
                         shop now
                    </Link>
               </div>

               <div className='flex-1 h-full flex justify-center'>
                    <img
                         src='/hero-image.png'
                         alt=''
                         className='object-cover w-full h-full'
                    />
               </div>
          </section>
     );
};

export default HeroSection;
