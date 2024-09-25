import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { VotosProvider } from "./context/VotosContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VotosProvider>
      <App />
    </VotosProvider>
  </StrictMode>
);
