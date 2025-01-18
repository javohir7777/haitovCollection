import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Header from "../header";
import Nav2 from "../navbar/nav-2";

import "./layout.css";
const Layout = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <div className="nav-2">
        <Nav2 />
      </div>
      <section className="dashboard">
        <Header />
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Layout;
