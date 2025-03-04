import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Theme } from "@radix-ui/themes";
import { Auth0Provider } from '@auth0/auth0-react';
const domain =import.meta.env.VITE_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_AUTH_CIENT_ID;

if  (!domain || !clientId) {
  throw new Error("Auth0 domain and client ID must be provided in the .env file");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor='jade' radius="small" panelBackground="translucent" appearance="inherit">
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
    </Theme>
  </StrictMode>,
)
