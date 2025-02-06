// import { Outlet } from 'react-router-dom';
 
// export const AuthLayout = () => (
//   <div className="bg-white min-h-screen">
//     <Outlet />
//   </div>
// );
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div className="bg-white min-h-screen">
    {children || <Outlet />}
  </div>
);
