import Product from '../../ui/Product';

const Popular = () => {
     return (
          <section className='px-16 border-t-[1px] border-gray-300 py-3'>
               <h1 className='my-4 font-light text-2xl'>Popular Products</h1>

               <div className='bg-orange-400'>
                    <div className='grid grid-flow-col gap-x-4 m-auto overflow-x-scroll w-[78rem] py-5 bg-green-400'>
                         {Array.from({ length: 10 }, (_, i) => (
                              <Product key={i + 1} w='40' />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Popular;
