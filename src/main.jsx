// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LogIn from "./components/logIn-SignUp/login-form/LogIn.jsx";
import SignUp from "./components/logIn-SignUp/signup-form/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome-Page/Welcome.jsx";
import { UsersProvider } from "./contexts/UsersContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UsersProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </UsersProvider>
  // </StrictMode>
);
