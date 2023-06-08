import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage';

const route = createBrowserRouter([
  { path: '/', element: <Homepage />}
]);


function App() {
  return <RouterProvider router={route} />;
}

export default App;
