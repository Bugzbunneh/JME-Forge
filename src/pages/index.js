import React from "react";
import instagramLogo from "./images/instagram.jpeg";

import "./index.scss";

export default function Home() {
  return (
    <div className="main-container">
      <div className="flex-container">
        <div className="jme-circle">
          <div className="jme-circle-text">
            <p>
              <b>J.M.E</b>
              <div className="line"></div>
            </p>
            <p>FORGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
