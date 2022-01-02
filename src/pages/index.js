import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";

export default function Home() {
  return (
    <div className="main-container">
      <div className="flex-container">
        <div className="jme-header">
          <div className="header-line"></div>
          <div className="header-image">
            <StaticImage src="../images/instagram.png" alt="Instagram" />
          </div>
          <div className="jme-circle">
            <div className="jme-circle-text">
              <div>
                <b>J.M.E</b>
                <div className="line"></div>
              </div>
              <p>FORGE</p>
            </div>
          </div>
          <div className="header-image">
            <StaticImage src="../images/forgeIcon.png" alt="Forge" />
          </div>
          <div className="header-line"></div>
        </div>
      </div>
    </div>
  );
}
