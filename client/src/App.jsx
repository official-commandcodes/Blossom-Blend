import { lazy, Suspense } from 'react';
import {
     createBrowserRouter,
     Navigate,
     RouterProvider,
} from 'react-router-dom';
import DropDownProvider from './ui/DropDownContext';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/Products'));
const ProductsDetails = lazy(() => import('./pages/ProductsDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Payment = lazy(() => import('./pages/Payment'));
const Account = lazy(() => import('./pages/Account'));
const AccountInformation = lazy(() => import('./pages/AccountInformation'));
const AccountOrders = lazy(() => import('./pages/AccountOrders'));
const AccountWishLists = lazy(() => import('./pages/AccountWishLists'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
     const router = createBrowserRouter([
          {
               path: '/',
               element: <AppLayout />,
               children: [
                    {
                         path: '/',
                         element: <Home />,
                    },

                    {
                         path: '/products',
                         element: <ProductsPage />,
                    },

                    {
                         path: '/products/:product',
                         element: <ProductsDetails />,
                    },

                    {
                         path: '/carts',
                         element: <Cart />,
                    },

                    {
                         path: '/checkout/:product',
                         element: <Checkout />,
                    },

                    {
                         path: '/payment',
                         element: <Payment />,
                    },

                    {
                         path: '/account/:user',
                         element: <Account />,
                         children: [
                              {
                                   index: true,
                                   element: (
                                        <Navigate
                                             to='/account/user/info'
                                             replace
                                        />
                                   ),
                              },
                              {
                                   path: '/account/:user/info',
                                   element: <AccountInformation />,
                              },
                              {
                                   path: '/account/:user/orders',
                                   element: <AccountOrders />,
                              },

                              {
                                   path: '/account/:user/wishlists',
                                   element: <AccountWishLists />,
                              },
                         ],
                    },

                    {
                         path: '/contact-us',
                         element: <Contact />,
                    },
               ],
          },
     ]);

     return (
          <DropDownProvider>
               <Suspense fallback={'Loading ....'}>
                    <RouterProvider router={router} />
               </Suspense>
          </DropDownProvider>
     );
};

export default App;
