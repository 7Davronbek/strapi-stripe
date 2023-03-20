import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Main, PageNotFound, Product, Products } from "./pages";
import { Navbar, NavigateLayout } from "./components";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <NavigateLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </>
  );
};

export default App;
