const HeroSection = () => {
     const handleSmoothScroll = function () {
          document.querySelector('#shop-now').scrollIntoView({
               behavior: 'smooth',
          });
     };

     return (
          <section className='flex bg-gray-200 h-96 px-4 py-6 md:px-6 lg:px-12 md:h-[630px]'>
               <div className='flex-1 md:pt-44 md:px-10 h-full flex flex-col justify-center'>
                    <h3 className='font-thin  text-[20px] md:text-[38px] md:leading-[50px]'>
                         Indulge in a world of beauty and self-care curated just
                         for you.
                    </h3>

                    <p className='text-[13px] leading-5  md:text-sm font-extralight my-4 md:leading-6'>
                         Explore our carefully selected collection, sourced from
                         renowned brands and crafted with your well-being in
                         mind. Whether you&apos;re seeking timeless classics or
                         the latest innovations, you&apos;ll find it all here.
                    </p>

                    <span>
                         <button
                              onClick={handleSmoothScroll}
                              className='px-4 py-2 text-gray-100 rounded-md shadow-lg shadow-orange-800/50 uppercase text-[13px] bg-orange-400'
                         >
                              shop now
                         </button>
                    </span>
               </div>

               <div className='flex-1 hidden h-full lg:flex justify-center'>
                    <img
                         src='/hero-image.png'
                         alt='Hero Image'
                         className='object-cover w-full h-full'
                    />
               </div>
          </section>
     );
};

export default HeroSection;
