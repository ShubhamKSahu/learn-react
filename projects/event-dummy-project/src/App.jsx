import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./components/RootLayout";
import EventsNavigation from "./components/EventsNavigation";
import RootRouteLayout from "./components/RootRouteLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      {
        path: "events/:eventId",
        element: <RootRouteLayout />,
        children: [{ index: true, element: <EventDetailPage /> }],
      },
      { path: "/events/new", element: <NewEventPage /> },
      { path: "/events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
