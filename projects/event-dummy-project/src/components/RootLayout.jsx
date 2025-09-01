import { Outlet } from "react-router-dom";
import MainNavigationPage from "./MainNavigationPage";

function RootLayout(){
    return <>
    <MainNavigationPage/>
    <Outlet/></>
}

export default RootLayout;