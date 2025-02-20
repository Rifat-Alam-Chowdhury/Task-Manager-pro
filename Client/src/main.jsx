import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FirebaseAuth from "./FireBaseAuth/FirebaseAuth.jsx";
import Routes from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <FirebaseAuth>
      <RouterProvider router={Routes}>
        <App />
      </RouterProvider>
    </FirebaseAuth>
  </QueryClientProvider>
);
