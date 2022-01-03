import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";

const Carousel = () => {
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
              gatsbyImageData(width: 500, placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
  `);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="jme-carousel">
      <Slider {...sliderSettings}>
        {data.allFile.edges.map((node, index) => {
          const image = getImage(node.node.childImageSharp);

          return (
            <GatsbyImage image={image} alt={toString(node.name)} key={index} />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
