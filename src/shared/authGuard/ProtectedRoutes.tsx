import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { MainLayout } from "@layouts/MainLayout";
import { CandidatesProfilePage } from "@pages/CandidateProfile/CandidateProfile.page";
import { DashboardPage, LoginPage } from "@pages/index";
import { Navigate } from "react-router-dom";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
 
const ProtectedRoutes = () => {
    const isAuthenticated = useIsAuthenticated();
    // const localStorageToken = localStorage.getItem(storagekeysEnum.AUTH_TOKEN);

    const { inProgress } = useMsal();
    console.log("inProgressinProgressinProgress", inProgress);
    console.log(isAuthenticated,'isAuthenticated isAuthenticated');
    
    return isAuthenticated ? <MainLayout /> : <Navigate to="/login"  replace />;
    // return  <MainLayout />
};
 
export default ProtectedRoutes;