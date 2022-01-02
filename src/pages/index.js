import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";

import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "sliderImages" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="main-container">
      <div className="flex-container">
        <div className="jme-header">
          <div className="header-section">
            <div className="header-line"></div>
            <div className="header-image">
              <StaticImage src="../images/whiteInsta.png" alt="Instagram" />
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
        <div className="jme-carousel">
          <Slider {...settings}>
            {data.allFile.edges.map((node, index) => {
              const image = getImage(node.node.childImageSharp);

              return (
                <GatsbyImage
                  image={image}
                  alt={toString(node.name)}
                  key={index}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
