import { Link } from 'react-router-dom';
import {
     AiFillFacebook,
     AiFillTwitterSquare,
     AiFillInstagram,
} from 'react-icons/ai';
import LinkItem from './LinkItem';
import FooterLists from './FooterLists';

const Footer = () => {
     return (
          <footer className='px-16 text-gray-800 divide-y-[1px] border-t-[1px] border-gray-200'>
               <div className='py-8 flex justify-between text-[13px]'>
                    <FooterLists
                         header={'Navigation'}
                         navigation={[
                              { label: 'About Us', link: '' },
                              { label: 'Contact Us', link: '' },
                              { label: 'FAQs', link: '' },
                              { label: 'Privacy Policy', link: '' },
                              { label: 'Terms and Conditions', link: '' },
                              { label: 'Returns and Refunds', link: '' },
                              { label: 'Shipping Information', link: '' },
                         ]}
                    />

                    <FooterLists
                         header={'Customer Service'}
                         navigation={[
                              { label: 'Contact', link: '/contact-us' },
                              { label: 'Phone', link: 'tel:+2348107559614' },
                              {
                                   label: 'Email',
                                   link: 'mailto:musaabdulkabeer19@gmail.com',
                              },
                         ]}
                    />

                    <FooterLists
                         header={'Popular Categoies'}
                         navigation={[
                              {
                                   label: 'Skincare',
                                   link: '/products?s=skincare',
                              },
                              {
                                   label: 'Haircare',
                                   link: '/products?s=haircare',
                              },
                              {
                                   label: 'Makeup',
                                   link: '/products?s=makeup',
                              },
                              {
                                   label: 'Fragrance',
                                   link: '/products?s=fragrance',
                              },
                              {
                                   label: 'Body & Bath',
                                   link: '/products?s=body-bath',
                              },
                         ]}
                    />

                    <FooterLists
                         header={'Features Brands'}
                         navigation={[
                              { label: 'Brand 1', link: '/' },
                              { label: 'Brand 2', link: '/' },
                              { label: 'Brand 3', link: '/' },
                              { label: 'Brand 4', link: '/' },
                         ]}
                    />
               </div>

               <div className='py-6 flex justify-between font-light text-xs'>
                    <div className='flex gap-3'>
                         <span>&copy; 2023 Blossom Blend, Inc.</span>
                         &bull;
                         <LinkItem>Terms</LinkItem>
                         &bull;
                         <LinkItem>Privacy</LinkItem>
                    </div>

                    <div className='flex gap-3 text-[20px]'>
                         <Link>
                              <AiFillFacebook />
                         </Link>

                         <Link>
                              <AiFillTwitterSquare />
                         </Link>

                         <Link>
                              <AiFillInstagram />
                         </Link>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
