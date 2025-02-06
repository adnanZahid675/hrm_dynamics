// import {
//   HomeLineIcon,
//   LayersThree01Icon,
//   CheckDone01Icon,
//   PieChart03Icon,
//   Users01Icon,
//   LifeBuoy01Icon,
//   Settings01Icon,
//   BarChartSquare02Icon,
// } from '@assets/iconComponents';
// import { APP_PATHS } from '@routes/app-paths';

// type SidebarEntry = {
//   icon: JSX.Element | null;
//   title: string;
//   href: string;
//   children?: {
//     title: string;
//     href: string;
//     icon: JSX.Element | null;
//   }[];
// };

// export const sidebarEntries: SidebarEntry[] = [
//   {
//     icon: <HomeLineIcon className="size-6" />,
//     title: 'Home',
//     href: APP_PATHS.home.get(),
//   },
//   {
//     icon: <BarChartSquare02Icon className="size-6" />,
//     title: 'Guaranteed Leases',
//     href: APP_PATHS.guaranteedLeases.get(),
//   },
//   {
//     icon: <LayersThree01Icon className="size-6" />,
//     title: 'Rent Claims',
//     href: APP_PATHS.rentClaims.get(),
//   },
//   {
//     icon: <CheckDone01Icon className="size-6" />,
//     title: 'Eviction Legal Fees',
//     href: APP_PATHS.evictionFees.get(),
//   },
//   {
//     icon: <PieChart03Icon className="size-6" />,
//     title: 'Malicious Damages',
//     href: APP_PATHS.maliciousDamages.get(),
//   },
//   {
//     icon: <Users01Icon className="size-6" />,
//     title: 'Properties',
//     href: APP_PATHS.properties.get(),
//     children: [
//       {
//         icon: <HomeLineIcon className="size-6" />,

//         title: 'Property',
//         href: APP_PATHS.properties.property.get(),
//       },
//       {
//         icon: <HomeLineIcon className="size-6" />,
//         title: 'Units',
//         href: APP_PATHS.properties.units.get(),
//       },
//       {
//         icon: <HomeLineIcon className="size-6" />,
//         title: 'Leases',
//         href: APP_PATHS.properties.leases.get(),
//       },
//       {
//         icon: <HomeLineIcon className="size-6" />,
//         title: 'Contacts',
//         href: APP_PATHS.properties.contacts.get(),
//       },
//       {
//         icon: <HomeLineIcon className="size-6" />,
//         title: 'Tenants',
//         href: APP_PATHS.properties.tenants.get(),
//       },
//       {
//         icon: <HomeLineIcon className="size-6" />,
//         title: 'Owners',
//         href: APP_PATHS.properties.owners.get(),
//       },
//     ],
//   },
//   {
//     icon: <LifeBuoy01Icon className="size-6" />,
//     title: 'Support',
//     href: APP_PATHS.support.get(),
//   },
//   {
//     icon: <Settings01Icon className="size-6" />,
//     title: 'Settings',
//     href: APP_PATHS.settings.get(),
//   },
// ];
