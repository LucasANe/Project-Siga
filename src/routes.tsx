import { createBrowserRouter } from "react-router-dom";
import LayoutClient from "./pages/LayoutClient";

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
]);

export default router;
