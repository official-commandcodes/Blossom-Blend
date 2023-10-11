import Product from '../../ui/Product';

const Products = () => {
     return (
          <section className='px-16 py-8 flex flex-col gap-2'>
               <h1 className='font-light text-2xl'>Elegant Beauty Picks</h1>

               <div className='grid grid-cols-4 gap-x-5 gap-y-10 py-2'>
                    {Array.from({ length: 12 }, (_, i) => (
                         <Product key={i + 1} w='0' />
                    ))}
               </div>
          </section>
     );
};

export default Products;
