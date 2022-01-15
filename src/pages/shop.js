import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";

export default function Shop() {
  return (
    <div className="shop-container">
      <div className="jme-product-container">
        <div className="jme-product-image-slider">
          <Slider>
            <div className="jme-product-image">
              <StaticImage
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src="../images/bottleOpener1.jpeg"
                alt="bottleOpener1"
                placeholder="blurred"
                objectFit="contain"
              />
            </div>
          </Slider>
        </div>
        <div className="jme-product-info">
          <div className="jme-product-title">Bottle Opener</div>
          <div className="jme-product-price">£6.99</div>
          <div className="jme-product-description">
            A hand crafted bottle opener made from mild steel.
          </div>
          <div className="jme-product-button">
            <button>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
