import { Navigate, useRoutes } from 'react-router-dom';

import {Layout} from './layout/Dashboard/layout'
import Dashboard from './page/Dashboard/Dashboard'
import Products from './page/Products/Products'


export default function Router() {
    const routes = useRoutes([
      {
        path: '/',
        element: <Layout/>,
        children: [
          { element: <Navigate to="/dashboard" />, index: true },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'products', element: <Products /> },
        ],
      },
    //   {
    //     element: <SimpleLayout />,
    //     children: [
    //       { element: <Navigate to="/dashboard/app" />, index: true },
    //       { path: '404', element: <Page404 /> },
    //       { path: '*', element: <Navigate to="/404" /> },
    //     ],
    //   },
    //   {
    //     path: '*',
    //     element: <Navigate to="/404" replace />,
    //   },
    ]);
  
    return routes;
  }