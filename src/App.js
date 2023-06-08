import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Products from './pages/Products';

const routeDefinetions = createRoutesFromElements(
  <Route>
    <Route path="/"  element={<Homepage />} />
    <Route path="products" element={<Products />} />
  </Route>
);

const route = createBrowserRouter(routeDefinetions);
// const route = createBrowserRouter([
  // { path: '/', element: <Homepage />},
  // { path: 'products', element: <Products />}
// ]);


function App() {
  return <RouterProvider router={route} />;
}

export default App;
