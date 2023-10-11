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
          <footer className='px-16'>
               <div className='border-t-[1px] py-8 flex justify-between text-[13px]'>
                    <FooterLists
                         header={'Navigation'}
                         navigation={['About Us','Contact Us','FAQs','Privacy Policy','Terms and Conditions','Returns and Refunds','Shipping Information']} // prettier-ignore
                    />

                    <FooterLists
                         header={'Customer Service'}
                         navigation={['Contact', 'Phone', 'Email']}
                         tel='tel:+2348107559614'
                         email='mailto:musaabdulkabeer19@gmail.com'
                    />

                    <FooterLists
                         header={'Popular Categoies'}
                         navigation={['Skincare','Haircare','Fragrances','Bath & Body']} // prettier-ignore
                    />

                    <FooterLists
                         header={'Features Brands'}
                         navigation={['Brand 1','Brand 2','Brand 3','Brand 4']} // prettier-ignore
                    />
               </div>

               <div className='border-t-[1px] py-6 flex justify-between font-light text-xs'>
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
