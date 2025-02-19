import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FirebaseAuth from "./FireBaseAuth/FirebaseAuth.jsx";
import Routes from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuth>
      <RouterProvider router={Routes}>
        <App />
      </RouterProvider>
    </FirebaseAuth>
  </StrictMode>
);
