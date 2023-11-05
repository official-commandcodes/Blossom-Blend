import { lazy, Suspense } from 'react';
import {
     createBrowserRouter,
     Navigate,
     RouterProvider,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';

import DropDownProvider from './ui/DropDownContext';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const SuspencePage = lazy(() => import('./ui/Suspense'));
const ProtectedRoutes = lazy(() => import('./ui/ProtectedRoutes'));
const Login = lazy(() => import('./pages/Login'));
const EmailVerify = lazy(() => import('./pages/EmailVerify'));
const ForgotPassword = lazy(() => import('./pages/ForgotPasswordPage'));
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
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

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
                         element: (
                              <ProtectedRoutes>
                                   <Cart />
                              </ProtectedRoutes>
                         ),
                    },

                    {
                         path: '/checkout/payment',
                         element: (
                              <ProtectedRoutes>
                                   <Checkout />,
                              </ProtectedRoutes>
                         ),
                    },

                    {
                         path: '*',
                         element: <PageNotFound />,
                    },

                    {
                         path: '/account/:me',
                         element: (
                              <ProtectedRoutes>
                                   <Account />,
                              </ProtectedRoutes>
                         ),
                         children: [
                              {
                                   index: true,
                                   element: (
                                        <Navigate
                                             to='/account/:me/info'
                                             replace
                                        />
                                   ),
                              },
                              {
                                   path: '/account/:me/info',
                                   element: <AccountInformation />,
                              },
                              {
                                   path: '/account/:me/orders',
                                   element: <AccountOrders />,
                              },

                              {
                                   path: '/account/:me/wishlists',
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
               path: '/auth/reset-password/:username/:token',
               element: <ForgotPassword />,
          },

          {
               path: '/sign-up',
               element: <Signup />,
          },
     ]);

     return (
          <>
               <GoogleOAuthProvider
                    clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
               >
                    <QueryClientProvider client={queryClient}>
                         <DropDownProvider>
                              <Suspense fallback={<SuspencePage />}>
                                   <RouterProvider router={router} />
                              </Suspense>
                         </DropDownProvider>

                         <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
               </GoogleOAuthProvider>
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
