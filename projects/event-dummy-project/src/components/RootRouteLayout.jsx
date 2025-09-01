import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";
function RootRouteLayout() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootRouteLayout;