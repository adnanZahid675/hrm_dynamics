// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { MainLayout } from '@layouts/MainLayout';
// import {
//   ContactsPage,
//   ErrorPage,
//   EvictionFeesPage,
//   GuaranteedLeasesPage,
//   HomePage,
//   LeasesPage,
//   MaliciousDamagesPage,
//   NewPropertyPage,
//   OwnersPage,
//   PropertiesPage,
//   PropertyPage,
//   RentClaimsPage,
//   SettingsPage,
//   SupportPage,
//   TenantsPage,
//   UnitsPage,
//   NewTenantPage
// } from '@pages/index';

// import { APP_PATHS } from './app-paths';

// const propertiesRoutes = [
//   {
//     path: APP_PATHS.properties.property.get(),
//     element: <PropertyPage />,
//   },
//   {
//     path: APP_PATHS.properties.units.get(),
//     element: <UnitsPage />,
//   },
//   {
//     path: APP_PATHS.properties.leases.get(),
//     element: <LeasesPage />,
//   },
//   {
//     path: APP_PATHS.properties.contacts.get(),
//     element: <ContactsPage />,
//   },
//   {
//     path: APP_PATHS.properties.tenants.get(),
//     element: <TenantsPage />,
//   },
//   {
//     path: APP_PATHS.properties.owners.get(),
//     element: <OwnersPage />,
//   },
//   {
//     path: APP_PATHS.properties.new.get(),
//     element: <NewPropertyPage />,
//   },
//   {
//     path: APP_PATHS.properties.newTenant.get(),
//     element: <NewTenantPage />,
//   },
// ];

// const routes = [
//   {
//     path: APP_PATHS.home.get(),
//     element: <HomePage />,
//   },
//   {
//     path: APP_PATHS.properties.get(),
//     element: <PropertiesPage />,
//   },
//   {
//     path: APP_PATHS.guaranteedLeases.get(),
//     element: <GuaranteedLeasesPage />,
//   },
//   {
//     path: APP_PATHS.rentClaims.get(),
//     element: <RentClaimsPage />,
//   },
//   {
//     path: APP_PATHS.evictionFees.get(),
//     element: <EvictionFeesPage />,
//   },
//   {
//     path: APP_PATHS.maliciousDamages.get(),
//     element: <MaliciousDamagesPage />,
//   },
//   {
//     path: APP_PATHS.settings.get(),
//     element: <SettingsPage />,
//   },
//   {
//     path: APP_PATHS.support.get(),
//     element: <SupportPage />,
//   },
//   ...propertiesRoutes,
// ];

// export function Router() {
//   return <RouterProvider router={router} />;
// }

// const router = createBrowserRouter([
//   {
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: routes,
//   },
// ]);

"use client"; // ✅ Required for Client Components in Next.js

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import APP_PATHS from './app-paths';
import { DashboardPage } from '@pages/Dashboard/Dashboard.page';
import { LoginPage } from '@pages/Login/Login.page';
import { ErrorPage } from '@pages/index';
import ProtectedRoutes from '@shared/authGuard/ProtectedRoutes';
import NonProtectedRoutes from '@shared/authGuard/NonProtectedRoutes';
import { CandidatesProfilePage } from '@pages/CandidateProfile/CandidateProfile.page';
import ScrollToTop from '@shared/authGuard/ScrollToTop/ScrollToTop';



const routes = [
  {
    path: APP_PATHS.dashboard.get(),
    element: <DashboardPage />,
  },
  {
    path: APP_PATHS.addCandidate.get(),
    element: <CandidatesProfilePage/>,
  },
];

const authRoutes = [
  {
    path: APP_PATHS.login.get(),
    element: <LoginPage />,
  },
];

export function Router() {
  

  return <RouterProvider router={router} />;
}
const router = createBrowserRouter([
  {
    element:<><ScrollToTop/><ProtectedRoutes /></> ,
    errorElement: <ErrorPage />,
    children: routes,
  },
 
  {
    element:<><ScrollToTop/><NonProtectedRoutes /></>,
    errorElement: <ErrorPage />,
    children: authRoutes,
  },
]);