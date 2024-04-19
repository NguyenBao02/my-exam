import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Admin from './component/Admin/admin'
import User from './component/User/user'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Homepage from './component/Homepage/hompage';
import ManagerUser from './component/Admin/Content/managerUser';
import Dashboard from './component/Admin/Content/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/admin/manager-user",
        element: <ManagerUser />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
