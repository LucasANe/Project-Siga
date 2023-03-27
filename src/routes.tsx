import { createBrowserRouter } from "react-router-dom";
import LayoutClient from "./components/layout/ClientLayout/ClientLayout";
import LoginLayout from "./components/layout/LoginLayout/LoginLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/cadastro",
  //       element: <Login />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <LayoutClient />,
        children: [
          {
            path: "/matricula",
          },
          {
            path: "/consulta",
          },
          {
            path: "/plano-de-estudo",
          },
          {
            path: "/matrizes",
          },
          {
            path: "/biblioteca",
          },
          {
            path: "/solicitacoes",
          },
          {
            path: "/conta",
          },
          {
            path: "/logout",
          },
        ],
      },
      {
        path: "/login",
        element: <LoginLayout />,
      },
    ],
  },
]);

export default router;
