import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import appRouter from "./routes/routes";


const routes = createBrowserRouter(appRouter());
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <Toaster richColors position="top-right" />
  </StrictMode>
);
