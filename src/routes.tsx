import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

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
    element: <Dashboard />,
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
