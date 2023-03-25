import React from "react";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Details from "./Details";
import { createBrowserRouter } from "react-router-dom";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
    {
      path: "/read/:id",
      element: <Details />,
    },
  ]);
  return router;
};

export default Routes;
