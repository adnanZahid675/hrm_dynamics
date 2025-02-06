import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { AuthLayout } from "@layouts/AuthLayout";
import { LoginPage } from "@pages/index";
import { Navigate, useLocation } from "react-router-dom";
 
const NonProtectedRoutes = () => {
    const isAuthenticated = useIsAuthenticated();
    const location = useLocation();
    console.log('llllllllllll', isAuthenticated, location.pathname);

    const { inProgress } = useMsal();
    // console.log("inProgressinProgressinProgress", inProgress);
    

    
    return !isAuthenticated ? <AuthLayout /> : <Navigate to={'/dashboard'}  replace />;
};
 
export default NonProtectedRoutes;