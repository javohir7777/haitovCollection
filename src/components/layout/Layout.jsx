import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Header from "../header";
import "./layout.css";
const Layout = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <section className="dashboard">
        <Header />
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Layout;
