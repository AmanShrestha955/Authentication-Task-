import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home.tsx";
import Login from "./component/Login/Login.tsx";
import SignIn from "./component/SignIn/SignIn.tsx";
import Profile from "./component/Profile/Profile.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import { checkAuth } from "./utils/auth.ts";
import { LoginProvider } from "./context/LoginContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute isAuth={checkAuth}>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute isAuth={checkAuth}>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </StrictMode>
);
