import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import RootPage from './pages/RootPage';
import Error404 from './pages/Error404';
import ProductDetailsPage from "./pages/ProductsDetailPage";
// const routeDefinetions = createRoutesFromElements(
//   <Route>
//     <Route path="/"  element={<Homepage />} />
//     <Route path="products" element={<Products />} />
//   </Route>
// );

// const route = createBrowserRouter(routeDefinetions);  
const route = createBrowserRouter([
  { path: '/', 
    element: <RootPage />,
    errorElement: <Error404 message="Can't find this page" />,
    children: [
      { 
        // path: '', 
        index: true,
        element: <Homepage />
      },
      { 
        path: 'products', 
        element: <Products />
      },
      {
        path: 'products/:productId/', 
        element: <ProductDetailsPage />
      }   
    ]
  }
]);


function App() {
  return <RouterProvider router={route} />;
}

export default App;
