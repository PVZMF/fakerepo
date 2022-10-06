import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "../layout/navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <React.Fragment>
        <div style={{"display":"flex","flexDirection":"column","height":"100%"}}>
            <Navbar />
            <Header />
            <main style={{"position":"absolute","width":"100%"}}>
                <Outlet />
            </main>
            <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
