import React from "react";
import Header from "./Header";

import "../pages/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <div className="flex-container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
