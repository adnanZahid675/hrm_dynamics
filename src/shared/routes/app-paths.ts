// export const APP_PATHS = {
//   home: {
//     get: () => '/',
//   },

//   properties: {
//     get: () => '/properties',

//     new: {
//       get: () => '/properties/new-property',
//     },

//     newTenant: {
//       get: () => '/properties/new-tenant',
//     },

//     property: {
//       get: () => '/properties/property',
//     },

//     units: {
//       get: () => '/properties/units',
//     },

//     leases: {
//       get: () => '/properties/leases',
//     },

//     contacts: {
//       get: () => '/properties/contacts',
//     },

//     tenants: {
//       get: () => '/properties/tenants',
//     },

//     owners: {
//       get: () => '/properties/owners',
//     },
//   },

//   guaranteedLeases: {
//     get: () => '/guaranteed-leases',
//   },
//   evictionFees: {
//     get: () => '/eviction-fees',
//   },
//   support: {
//     get: () => '/support',
//   },
//   settings: {
//     get: () => '/settings',
//   },
//   maliciousDamages: {
//     get: () => '/malicious-damages',
//   },
//   rentClaims: {
//     get: () => '/rent-claims',
//   },
// };

const APP_PATHS = {
  dashboard:{
    get: ()=> '/dashboard'
  },
  login:{
    get: ()=> '/login'
  },
  addCandidate:{
    get: ()=> '/add-candidate'
  }
  
};

export default APP_PATHS;
