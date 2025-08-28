
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

// const router = createBrowserRouter([
//   { path : '/', element: <HomePage/>},
//   { path: '/products', element: <ProductPage/>}
// ])

const route = createRoutesFromElements(<Route>
<Route path='/' element={<HomePage/>} />
<Route path='/products' element={<ProductPage/>} />
</Route>)

const router = createBrowserRouter(route);
function App() {
  return <RouterProvider router={router}/>
}

export default App;
