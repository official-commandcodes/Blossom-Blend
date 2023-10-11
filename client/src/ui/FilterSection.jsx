import Filter from './Filter';

const FilterSection = () => {
     const category = [
          { label: 'Category', value: '' },
          { label: 'Skincare', value: 'skincare' },
          { label: 'Haircare', value: 'haircare' },
          { label: 'Makeup', value: 'makeup' },
          { label: 'Fragrance', value: 'fragrance' },
          { label: 'Bath & Body', value: 'bath&body' },
     ];

     const brand = [
          { label: 'Brand', value: '' },
          { label: 'Brand 1', value: 'brand-1' },
          { label: 'Brand 2', value: 'brand-2' },
          { label: 'Brand 3', value: 'brand-3' },
          { label: 'Brand 4', value: 'brand-4' },
     ];

     const skinType = [
          { label: 'Skin Type', value: '' },
          { label: 'Normal', value: 'normal' },
          { label: 'Oily', value: 'oily' },
          { label: 'Dry', value: 'dry' },
          { label: 'Combination', value: 'combination' },
     ];

     const hairType = [
          { label: 'Hair Type', value: '' },
          { label: 'Straight', value: 'straight' },
          { label: 'Curly', value: 'curly' },
          { label: 'Wavy', value: 'wavy' },
          { label: 'Coily', value: 'coily' },
     ];

     const priceRange = [
          { label: 'Price Range', value: '' },
          { label: '$0 -$20', value: '0-20' },
          { label: '$20 - $50', value: '20-50' },
          { label: '$50 -$100', value: '50-100' },
          { label: '$100+', value: '100+' },
     ];

     const fragranceNotes = [
          { label: 'Fragrance Notes', value: '' },
          { label: 'Floral', value: 'Floral' },
          { label: 'Citrus', value: 'Citrus' },
          { label: 'Woody', value: 'Woody' },
          { label: 'Spicy', value: 'Spicy' },
     ];

     const rating = [
          { label: 'Rating', value: '' },
          { label: '4 Stars & Up', value: '4+' },
          { label: ' 3 Stars & Up', value: '3+' },
          { label: ' 2 Stars & Up', value: '2+' },
          { label: ' 1 Star & Up', value: '1+' },
     ];

     const sort = [
          { label: 'Sort By', value: '' },
          { label: 'Best Sellers', value: 'best-seller' },
          { label: 'New Arrivals', value: 'new' },
          { label: 'Price: Low to High', value: 'low-price' },
          { label: 'Price: High to Low', value: 'high-price' },
          { label: 'Customer Ratings', value: 'ratings' },
          { label: 'Brand', value: 'brand' },
     ];
     return (
          <section className='px-16 py-7 bg-gray-300 flex justify-between border-b-[1px]'>
               <div className='flex gap-4'>
                    <Filter filter={category} />
                    <Filter filter={brand} />
                    <Filter filter={skinType} />
                    <Filter filter={hairType} />
                    <Filter filter={priceRange} />
                    <Filter filter={fragranceNotes} />
                    <Filter filter={rating} />
               </div>
               <div>
                    <Filter filter={sort} />
               </div>
          </section>
     );
};

export default FilterSection;
