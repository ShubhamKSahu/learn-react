import { Outlet } from "react-router-dom";
import MainPageNavigation from "../components/MainPageNavigation";
function RootPage() {
  return (
    <>
      <MainPageNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
