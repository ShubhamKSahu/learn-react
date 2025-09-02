import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import Users from "./pages/Users";
import SettingsPage from "./pages/SettingsPage";
import Feedback from "./pages/Feedback";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element : <HomePage/>},
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/users", element: <Users /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/feedback", element: <Feedback /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
