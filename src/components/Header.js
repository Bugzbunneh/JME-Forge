import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="jme-header">
      <div className="header-section">
        <div className="header-image">
          <a href="https://www.instagram.com/jme_forge/">
            <StaticImage
              src="../images/whiteInsta.png"
              alt="Instagram"
              placeholder="blurred"
            />
            <div className="glow-animation" />
          </a>
        </div>
      </div>

      <div className="jme-logo">
        <StaticImage src="../images/JMEForge.png" alt="JMEForge" />
      </div>

      <div className="header-section">
        <Link to="/shop">
          <button className="jme-shop-button">SHOP</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
