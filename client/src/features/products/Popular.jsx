import Product from '../../ui/Product';

const Popular = () => {
     return (
          <section className='px-16 py-8 border-t-[1px] flex flex-col gap-2 border-gray-300'>
               <h1 className='font-medium text-2xl'>Popular Products</h1>

               <div className='grid grid-flow-col gap-x-4 py-3 mx-6 overflow-x-auto'>
                    {Array.from({ length: 12 }, (_, i) => (
                         <Product key={i + 1} w={250} />
                    ))}
               </div>
          </section>
     );
};

export default Popular;
