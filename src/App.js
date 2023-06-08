import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage';
import Products from './pages/Products';

const route = createBrowserRouter([
  { path: '/', element: <Homepage />},
  { path: 'products', element: <Products />}
]);


function App() {
  return <RouterProvider router={route} />;
}

export default App;
