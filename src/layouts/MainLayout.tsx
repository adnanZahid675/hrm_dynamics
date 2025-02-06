import { Outlet } from "react-router-dom";
import { Header } from "@components/Dashboard/Header";
import { Sidebar } from "@components/Dashboard/Sidebar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = () => (
  <div className="overflow-auto pr-1">
    <Sidebar />
    <div className="pl-16">
      <Header />
      <main className="flex flex-col 1024:ps-[312px] 1024:pe-24 pt-16">
         <Outlet /> {/* Render children if provided, otherwise use Outlet */}
      </main>
    </div>
  </div>
);
