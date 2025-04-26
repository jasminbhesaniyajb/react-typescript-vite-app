import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { DashboardLayout } from "./components/layout/dashboard-layout";
import Theme from "./pages/theme";
import todo from "./pages/todo";
import Students from "./pages/students";

export const routes = [
  {
    path: "/",
    element: React.createElement(DashboardLayout),
    children: [
      {
        path: "/",
        index: true,
        element: React.createElement(Home),
      },
      {
        path: "/theme",
        element: React.createElement(Theme),
      },
      {
        path: "/todo",
        element: React.createElement(todo),
      },
      {
        path: "/students",
        element: React.createElement(Students),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
