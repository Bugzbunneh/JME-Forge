import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <div className="jme-header">
      <div className="header-section">
        <div className="header-line" />
        <div className="header-image">
          <a href="https://www.instagram.com/jme_forge/">
            <StaticImage src="../images/whiteInsta.png" alt="Instagram" />
            <div className="glow-animation" />
          </a>
        </div>
      </div>

      <div className="jme-logo">
        <StaticImage src="../images/JMEForge.png" alt="JMEForge" />
      </div>

      <div className="header-section">
        <div className="header-image">
          <StaticImage src="../images/forgeIcon.png" alt="Forge Icon" />
        </div>
        <div className="header-line" />
      </div>
    </div>
  );
};

export default Header;
