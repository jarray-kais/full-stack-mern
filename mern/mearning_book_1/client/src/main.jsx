import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./StoreContext.jsx";

const store = createContext()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider value={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
