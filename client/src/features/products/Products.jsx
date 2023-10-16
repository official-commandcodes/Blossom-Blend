import Product from '../../ui/Product';

const Products = ({ title }) => {
     return (
          <section className='px-16 py-8 flex flex-col gap-2'>
               {title && (
                    <h1 className='font-medium text-2xl text-orange-900'>
                         {title}
                    </h1>
               )}

               <div className='grid grid-cols-6 gap-x-6 gap-y-10 py-2'>
                    {Array.from({ length: 12 }, (_, i) => (
                         <Product key={i + 1} w='' />
                    ))}
               </div>
          </section>
     );
};

export default Products;
