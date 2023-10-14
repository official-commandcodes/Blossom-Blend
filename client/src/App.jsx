import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/Products'));
const ProductsDetails = lazy(() => import('./pages/ProductsDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));

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
               ],
          },
     ]);

     return (
          <Suspense fallback={<div>Loading...</div>}>
               <RouterProvider router={router} />
          </Suspense>
     );
};

export default App;
