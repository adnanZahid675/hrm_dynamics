import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@css/index.css';
import '@css/reset.css';
import { MantineProvider } from '@mantine/core';
import { Router } from '@routes/Router';
import { theme } from '@shared/theme';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from '@shared/instance';
export default function App() {
  return (
    <MantineProvider theme={theme}>
        <MsalProvider instance={msalInstance}>
          <Router />
      </MsalProvider>
    </MantineProvider>
  );
}