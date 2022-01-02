import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";

export default function Home() {
  return (
    <div className="main-container">
      <div className="flex-container">
        <div className="jme-header">
          <div className="header-section">
            <div className="header-line"></div>
            <div className="header-image">
              <StaticImage src="../images/instagram.png" alt="Instagram" />
            </div>
          </div>

          <div className="jme-logo">
            <StaticImage src="../images/JMEForge.png" alt="JMEForge" />
          </div>

          <div className="header-section">
            <div className="header-image">
              <StaticImage src="../images/forgeIcon.png" alt="Forge Icon" />
            </div>
            <div className="header-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
