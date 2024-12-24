import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./StoreContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
    </HelmetProvider>
    
  </StrictMode>
);
