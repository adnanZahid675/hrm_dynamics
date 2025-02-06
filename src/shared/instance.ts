import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../configs/authConfig";

// Create an instance of PublicClientApplication
const msalInstance: PublicClientApplication = new PublicClientApplication(msalConfig);

async function initializeMsal(): Promise<void> {
    try {
        await msalInstance.initialize(); // Ensure it's initialized
        console.log("✅ MSAL initialized successfully");
    } catch (error) {
        console.error("❌ Error initializing MSAL:", error);
    }
}

// Initialize MSAL on app startup
initializeMsal();

export { msalInstance };
