import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./RootLayout.css"; 

function RootLayout() {
  return (
    <div className="root-layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

