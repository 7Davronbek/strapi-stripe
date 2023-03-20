import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from "./pages";
import { Navbar } from "./components";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/product",
      element: <span>Product ID</span>,
    },
    {
      path: "*",
      element: <span>Page not found</span>,
    },
  ]);

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </>
  );
};

export default App;
