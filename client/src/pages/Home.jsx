import { Link } from 'react-router-dom';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import Filter from '../ui/Filter';
import Product from '../ui/Product';
import FAQ from '../ui/FAQ';

const Home = () => {
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

     const faq = [
          {
               question: 'How do I place an order on your website?',
               answer: ' To place an order, simply browse our products, select the items you want, and click "Add to Cart". Once you\'re ready, proceed to checkout.',
          },

          {
               question: 'What payment methods do you accept?',
               answer: 'We accept major credit/debit cards, PayPal, and other secure payment methods.',
          },

          {
               question: 'What is your return policy?',
               answer: "We offer a [X-day/money-back] guarantee. If you're not satisfied with your purchase, please refer to our Returns & Exchanges page for more information.",
          },

          {
               question: 'How long does shipping take?',
               answer: 'Shipping times vary depending on your location. You can find estimated delivery times on our Shipping Information page.',
          },

          {
               question: 'Do you offer international shipping?',
               answer: 'Yes, we ship to [list of countries]. Please refer to our International Shipping policy for more details.',
          },

          {
               question: 'Can I track my order?',
               answer: 'Yes, you will receive a tracking number via email once your order has been shipped.',
          },

          {
               question: 'Are your products cruelty-free?',
               answer: 'We are proud to offer a wide range of cruelty-free and vegan products. Look for the relevant labels on product pages.',
          },

          {
               question: 'Do you offer international shipping?',
               answer: 'Yes, we ship to [list of countries]. Please refer to our International Shipping policy for more details.',
          },

          {
               question: 'Do you offer gift wrapping services?',
               answer: 'Yes, we offer gift wrapping for an additional fee. You can select this option during checkout.',
          },
          {
               question:
                    'Can I cancel or modify my order after it has been placed?',
               answer: 'We aim to process orders quickly, but if you need to make changes, please contact our customer support as soon as possible.',
          },

          {
               question: 'How can I contact your customer support team?',
               answer: 'You can reach our customer support team via developer.bako@gmail.com/+2348107559614/ during our business hours. Visit our Contact Us page for more information.',
          },

          {
               question: 'Do you offer samples of your products?',
               answer: 'We occasionally offer samples with purchases. Check our promotions or subscribe to our newsletter for updates.',
          },

          {
               question: 'Are your products suitable for sensitive skin?',
               answer: 'Many of our products are designed with sensitive skin in mind. Look for products labeled as "gentle" or "suitable for sensitive skin.',
          },

          {
               question:
                    'How can I stay updated on your latest arrivals and promotions?',
               answer: 'You can subscribe to our newsletter or follow us on [social media platforms] for the latest updates.',
          },

          {
               question: 'What should I do if I receive a damaged item?',
               answer: 'Please contact our customer support team with photos of the damaged item, and we will assist you with a replacement or refund.',
          },

          {
               question:
                    "Can I return a product if I'm not satisfied with the results?",
               answer: "Yes, we offer a satisfaction guarantee. If a product doesn't meet your expectations, refer to our Returns & Exchanges policy.",
          },
     ];

     return (
          <div>
               {/* HERO SECTION */}
               <section className='flex bg-gray-200 px-12 h-[630px]'>
                    <div className='flex-1 pt-44 px-20'>
                         <h3 className='font-thin text-[38px] leading-[50px]'>
                              Indulge in a world of beauty and self-care curated
                              just for you.
                         </h3>

                         <p className='text-sm font-extralight my-4 leading-6'>
                              Explore our carefully selected collection, sourced
                              from renowned brands and crafted with your
                              well-being in mind. Whether you&apos;re seeking
                              timeless classics or the latest innovations,
                              you&apos;ll find it all here.
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

               {/* FILTERS & SORT*/}
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

               {/* PRODUCTS */}
               <section className='px-16 py-8 flex flex-col gap-2'>
                    <h1 className='font-medium text-2xl'>
                         Elegant Beauty Picks
                    </h1>

                    <div className='grid grid-cols-4 gap-x-5 gap-y-6 py-2'>
                         {Array.from({ length: 12 }, (_, i) => (
                              <Product key={i + 1} w='0' />
                         ))}
                    </div>
               </section>

               {/* PAGINATION */}
               <section className='flex justify-center items-center py-6'>
                    <div className='flex items-center gap-6'>
                         <div className='w-10 h-10 rounded-full border-[1px] border-orange-300 flex justify-center items-center cursor-pointer font-semibold'>
                              <BsChevronLeft />
                         </div>
                         <div className='text-orange-900'>1</div>
                         <div className='w-10 h-10 rounded-full border-[1px] border-orange-300 flex justify-center items-center cursor-pointer font-semibold'>
                              <BsChevronRight />
                         </div>
                    </div>
               </section>

               {/* POPULAR PRODUCTS */}
               <section className='px-20 border-t-[1px] border-gray-300 py-3'>
                    <h1 className='my-4 font-medium text-2xl'>
                         Popular Products
                    </h1>

                    <div className='w-full'>
                         <div className='grid grid-flow-col gap-4 m-auto overflow-x-scroll w-[78rem] py-5'>
                              {Array.from({ length: 10 }, (_, i) => (
                                   <Product key={i + 1} w='20' />
                              ))}
                         </div>
                    </div>
               </section>

               {/* FAQ */}

               <section className='border-t-[1px] px-16 py-10'>
                    <div className='font-thin'>
                         <h2 className='font-light text-2xl '>
                              Frequently Asked Questions
                         </h2>
                         <p className='text-sm mt-2'>
                              Find answers to common questions about our
                              products and services below.
                         </p>
                    </div>

                    <ul className='flex flex-col gap-2 py-6'>
                         {faq.map((fq, i) => (
                              <FAQ key={i + 1}>
                                   <div className='flex justify-between items-center bg-gray-200 px-4 py-2 text-sm font-light tracking-wider'>
                                        <h5>{fq.question}</h5>

                                        <FAQ.Button id={i + 1}>
                                             <span className='cursor-pointer w-7 h-7 flex justify-center items-center font-semibold text-xl'></span>
                                        </FAQ.Button>
                                   </div>
                                   <FAQ.Body window={i + 1}>
                                        {fq.answer}
                                   </FAQ.Body>
                              </FAQ>
                         ))}
                    </ul>
               </section>
          </div>
     );
};

export default Home;
