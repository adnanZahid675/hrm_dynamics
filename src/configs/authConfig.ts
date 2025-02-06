import { Configuration, LogLevel, PopupRequest } from '@azure/msal-browser';
// import { ML_AUTHORITY_URL, ML_CLIENT_ID } from '';

const ML_CLIENT_ID = import.meta.env.VITE_ML_CLIENT_ID;
const ML_AUTHORITY_URL = import.meta.env.VITE_ML_AUTHORITY_URL;
export const msalConfig: Configuration = {
 
  auth: {
    clientId: ML_CLIENT_ID,
    authority: ML_AUTHORITY_URL,
    knownAuthorities: [],
    navigateToLoginRequestUrl: true,
    redirectUri: "http://localhost:5173",
    postLogoutRedirectUri: '/',
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: true, // Helps with browser session issues
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            break;
        }
      },
    },
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ['User.Read'],
};
