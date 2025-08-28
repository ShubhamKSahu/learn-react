
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },
]);

// const route = createRoutesFromElements(<Route>
// <Route path='/' element={<HomePage/>} />
// <Route path='/products' element={<ProductPage/>} />
// </Route>)

// const router = createBrowserRouter(route);
function App() {
  return <RouterProvider router={router}/>
}

export default App;
