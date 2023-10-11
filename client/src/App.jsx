import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));

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
                         path: '/cart',
                         element: <Cart />,
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
