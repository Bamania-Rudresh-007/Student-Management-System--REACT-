import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LogIn from "./components/logIn-SignUp/login-form/LogIn.jsx";
import SignUp from "./components/logIn-SignUp/signup-form/SignUp.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome-Page/Welcome.jsx";
import { UsersProvider } from "./contexts/UsersContext.jsx";
import Home from "./components/Home/Home.jsx";
import AddStudent from "./components/CRUD-OPERATIONS/AddStudent.jsx";
import UpdateStudent from "./components/CRUD-OPERATIONS/UpdateStudent.jsx";
import DeleteStudent from "./components/CRUD-OPERATIONS/DeleteStudent.jsx";
import ViewStudentCards from "./components/AllStudents-AND-PersonalCards/ViewStudentCards.jsx";
import { StudentsProvider } from "./contexts/StudentsContext.jsx";
import ViewStudentDetails from "./components/AllStudents-AND-PersonalCards/ViewStudentsDetails.jsx";

const isLogin = JSON.parse(localStorage.getItem("isLogin"))

const router = createBrowserRouter([
  {
    path: "/",
    element: isLogin ? <Navigate to="/home"/> : <Welcome />
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/addStudent",
    element: <AddStudent />
  },
  {
    path: "/updateStudent",
    element: <UpdateStudent />
  },
  {
    path: "/deleteStudent",
    element: <DeleteStudent />
  },
  {
    path: "/viewStudents",
    element: <ViewStudentCards   />
  },
  {
    path: "/viewStudentDetails",
    element: <ViewStudentDetails   />
  },
]);


createRoot(document.getElementById("root")).render(
  <UsersProvider>
    <StudentsProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </StudentsProvider>
  </UsersProvider>
);
