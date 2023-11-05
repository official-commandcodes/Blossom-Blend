import FAQ from '../../ui/FAQ';

const FAQS = () => {
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
          // {
          //      question:
          //           'Can I cancel or modify my order after it has been placed?',
          //      answer: 'We aim to process orders quickly, but if you need to make changes, please contact our customer support as soon as possible.',
          // },

          // {
          //      question: 'How can I contact your customer support team?',
          //      answer: 'You can reach our customer support team via developer.bako@gmail.com/+2348107559614/ during our business hours. Visit our Contact Us page for more information.',
          // },

          // {
          //      question: 'Do you offer samples of your products?',
          //      answer: 'We occasionally offer samples with purchases. Check our promotions or subscribe to our newsletter for updates.',
          // },

          // {
          //      question: 'Are your products suitable for sensitive skin?',
          //      answer: 'Many of our products are designed with sensitive skin in mind. Look for products labeled as "gentle" or "suitable for sensitive skin.',
          // },

          // {
          //      question:
          //           'How can I stay updated on your latest arrivals and promotions?',
          //      answer: 'You can subscribe to our newsletter or follow us on [social media platforms] for the latest updates.',
          // },

          // {
          //      question: 'What should I do if I receive a damaged item?',
          //      answer: 'Please contact our customer support team with photos of the damaged item, and we will assist you with a replacement or refund.',
          // },

          // {
          //      question:
          //           "Can I return a product if I'm not satisfied with the results?",
          //      answer: "Yes, we offer a satisfaction guarantee. If a product doesn't meet your expectations, refer to our Returns & Exchanges policy.",
          // },
     ];

     return (
          <section className='border-t-[1px] px-4 md:px-10 lg:px-16 py-6'>
               <div className='font-thin'>
                    <h2 className='font-medium text-[19px] lg:text-2xl text-orange-950'>
                         Frequently Asked Questions
                    </h2>
                    <p className='text-[13px] md:text-sm mt-2'>
                         Find answers to common questions about our products and
                         services below.
                    </p>
               </div>

               <ul className='grid gap-2 py-6'>
                    {faq.map((fq, i) => (
                         <FAQ key={i + 1}>
                              <div className='flex justify-between items-center bg-gray-200 px-4 py-2 text-sm font-light tracking-wider'>
                                   <h5>{fq.question}</h5>

                                   <FAQ.Button id={i + 1}>
                                        <span className='cursor-pointer w-7 h-7 flex justify-center items-center font-semibold text-xl'></span>
                                   </FAQ.Button>
                              </div>
                              <FAQ.Body window={i + 1}>{fq.answer}</FAQ.Body>
                         </FAQ>
                    ))}
               </ul>
          </section>
     );
};

export default FAQS;
