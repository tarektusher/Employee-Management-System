import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import UserTable from "../components/UserTable";
import EmployeeTable from "../components/EmployeeTable";
import DashBoard from "../components/DashBoard";
import AddEmployee from "../pages/AddEmployee";
import DeleteEmployee from "../pages/DeleteEmployee";
import EditEmployee from "../pages/EditEmployee";
import FindOneEmployee from "../components/FindOneEmployee";
import { LoginForm } from "../components/LoginForm";
import ViewEmployee from "../components/viewEmployee";
export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "alluser",
          element: <UserTable />,
        },
        {
          path: "employee",
          element: <EmployeeTable />,
        },
        {
          path: "dashboard",
          element: <DashBoard />,
        },
        {
          path: "addemployee",
          element: <AddEmployee />,
        },
        {
          path: "deleteemployee",
          element: <DeleteEmployee />,
        },
        {
          path: "editemployee/:id",
          element: <EditEmployee />,
        },
        {
          path: "findoneemployee",
          element: <FindOneEmployee />,
        },
        {
          path: "login",
          element: <LoginForm />,
        },
        {
          path: "view/:id",
          element: <ViewEmployee />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
