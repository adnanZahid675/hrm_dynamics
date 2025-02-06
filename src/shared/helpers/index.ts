
// export const authToken = () => {
//   try {
//     let accessToken = '';
//     const storedToken = localStorage.getItem('accessToken');
//     if (storedToken) accessToken = JSON.parse(storedToken);
//     return accessToken || process.env.REACT_APP_TOKEN;
//   } catch {
//     localStorage.clear();
//   }
//   return null;
// };

// export const isAuthenticated = () => {
//   const token = authToken();
//   return !!token;
// };