import Product from '../../ui/Product';

const Popular = () => {
     return (
          <section className='px-16 border-t-[1px] border-gray-300 py-3'>
               <h1 className='my-4 font-light text-2xl'>Popular Products</h1>

               <div className='w-full'>
                    <div className='grid grid-flow-col gap-4 m-auto overflow-x-scroll w-[78rem] py-5'>
                         {Array.from({ length: 10 }, (_, i) => (
                              <Product key={i + 1} w='20' />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Popular;
