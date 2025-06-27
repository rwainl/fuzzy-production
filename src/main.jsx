import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
);
