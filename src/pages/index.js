import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="main-container">
      <div className="flex-container">
        <Header />
        <Carousel />
      </div>
    </div>
  );
}
