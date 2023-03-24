import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import GlobalStyle from "./assets/styles/globalStyles";
import router from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Fragment>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Fragment>
  </React.StrictMode>
);
