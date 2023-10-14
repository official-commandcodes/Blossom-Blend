import Input from './Input';

const Shipping = () => {
     return (
          <section className='basis-3/4'>
               <h1 className='px-2 py-4 bg-gray-200 text-xl font-medium uppercase text-gray-900'>
                    Shipping
               </h1>

               <form className='px-6 py-4 flex flex-col gap-8'>
                    <div className='flex gap-6 w-full'>
                         <Input label='First Name' />
                         <Input label='Last Name' />
                    </div>

                    <div>
                         <Input label='Street Address' />
                    </div>

                    <div className='flex gap-6 w-full'>
                         <Input label='State' />
                         <Input label='City' />
                    </div>

                    <button className='bg-gray-600 py-2 w-48 text-gray-100 rounded-md'>
                         Continue
                    </button>
               </form>
          </section>
     );
};

export default Shipping;
