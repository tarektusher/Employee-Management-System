import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
// import { CoursesPage } from '../pages/CoursesPage';
import { AboutPage } from '../pages/AboutPage';
import UserTable from '../components/UserTable';
import EmployeeTable from '../components/EmployeeTable';
import DashBoard from '../components/DashBoard';
import AddEmployee from '../pages/AddEmployee';
import DeleteEmployee from '../pages/DeleteEmployee';
import EditEmployee from '../pages/EditEmployee';
export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path : 'alluser',
          element : <UserTable />
        },
        {
          path : 'employee',
          element : <EmployeeTable />,
        },
        {
          path : 'dashboard',
          element : <DashBoard />
        },
        {
          path : 'addemployee',
          element : <AddEmployee />,
        },
        {
          path : 'deleteemployee',
          element : <DeleteEmployee />,
        },
        {
          path : 'editemployee',
          element : <EditEmployee/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

