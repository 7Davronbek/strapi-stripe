import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const NavigateLayout = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavigateLayout;
