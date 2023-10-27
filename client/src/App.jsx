import { lazy, Suspense } from 'react';
import {
     createBrowserRouter,
     Navigate,
     RouterProvider,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import DropDownProvider from './ui/DropDownContext';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Login = lazy(() => import('./pages/Login'));
const EmailVerify = lazy(() => import('./pages/EmailVerify'));
const Signup = lazy(() => import('./pages/Signup'));
const Home = lazy(() => import('./pages/Home'));
const ProductsDetails = lazy(() => import('./pages/ProductsDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Account = lazy(() => import('./pages/Account'));
const AccountInformation = lazy(() => import('./pages/AccountInformation'));
const AccountOrders = lazy(() => import('./pages/AccountOrders'));
const AccountWishLists = lazy(() => import('./pages/AccountWishLists'));
const Contact = lazy(() => import('./pages/Contact'));

const queryClient = new QueryClient({
     defaultOptions: {
          queries: {
               staleTime: 0,
          },
     },
});

const App = () => {
     const router = createBrowserRouter([
          {
               path: '/',
               element: <AppLayout />,
               children: [
                    {
                         index: true,
                         element: <Navigate to='/products' replace />,
                    },

                    {
                         path: '/products',
                         element: <Home />,
                    },

                    {
                         path: '/products/:slug',
                         element: <ProductsDetails />,
                    },

                    {
                         path: '/carts',
                         element: <Cart />,
                    },

                    {
                         path: '/checkout/payment',
                         element: <Checkout />,
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

          {
               path: '/login',
               element: <Login />,
          },

          {
               path: '/auth/email-verification/:userId/:token',
               element: <EmailVerify />,
          },

          {
               path: '/sign-up',
               element: <Signup />,
          },
     ]);

     return (
          <>
               <QueryClientProvider client={queryClient}>
                    <DropDownProvider>
                         <Suspense fallback={'Loading ....'}>
                              <RouterProvider router={router} />
                         </Suspense>
                    </DropDownProvider>

                    <ReactQueryDevtools initialIsOpen={false} />
               </QueryClientProvider>
               <Toaster
                    position='top-right'
                    reverseOrder={false}
                    gutter={8}
                    toastOptions={{
                         // Default options for specific types
                         success: {
                              duration: 3000,
                              theme: {
                                   primary: 'green',
                                   secondary: 'black',
                              },
                         },

                         error: {
                              duration: 3000,
                              theme: {
                                   primary: 'orange',
                                   secondary: 'black',
                              },
                         },
                    }}
               />
          </>
     );
};

export default App;
