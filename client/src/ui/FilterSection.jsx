import Filter from './Filter';

const FilterSection = () => {
     return (
          <section className='px-16 py-7 bg-gray-300 grid justify-items-stretch border-b-[1px]'>
               <div className='justify-self-end flex gap-3'>
                    <Filter
                         options={[
                              { label: 'Category', value: 'all' },
                              { label: 'Skincare', value: 'skincare' },
                              { label: 'Makeup', value: 'makeup' },
                              { label: 'Fragrance', value: 'fragrance' },
                              { label: 'Body', value: 'body' },
                         ]}
                         filterField='category'
                    />

                    <Filter
                         options={[
                              { label: 'Sort By', value: 'all' },
                              { label: 'Best Selling', value: 'best-selling' },
                              { label: 'New Arrivals', value: 'new' },
                              {
                                   label: 'Low Price',
                                   value: 'low-price',
                              },
                              {
                                   label: 'Hight Price',
                                   value: 'high-price',
                              },
                         ]}
                         filterField='sort'
                    />
               </div>
          </section>
     );
};

export default FilterSection;
