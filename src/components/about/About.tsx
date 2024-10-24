import React from "react";
import {
  AboutContainer,
  AboutText,
  AboutTitle,
  BrandCard,
  CardText,
  CardImage,
  CardRow,
  DividerLine,
  AboutCardTitle,
} from "./About.styles";
import img1 from "../../images/icon-brand-recognition.svg";
import img2 from "../../images/icon-detailed-records.svg";
import img3 from "../../images/icon-fully-customizable.svg";

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>Advanced Statistics</AboutTitle>
      <AboutText>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </AboutText>
      <DividerLine /> 
      <CardRow>
        <BrandCard style={{ top: "2px", zIndex: 1 }}>
          <CardImage>
            <img src={img1} alt="Brand Recognition" />
          </CardImage>
          <CardText>
            <AboutCardTitle>Brand Recognition</AboutCardTitle>
            <AboutText>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </AboutText>
          </CardText>
        </BrandCard>
        <BrandCard style={{ top: "30px", zIndex: 1 , }}>
          <CardImage>
            <img src={img2} alt="Detailed Records" />
          </CardImage>
          <CardText>
            <AboutCardTitle>Detailed Records</AboutCardTitle>
            <AboutText>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </AboutText>
          </CardText>
        </BrandCard>
        <BrandCard style={{ top: "70px", zIndex: 1 }}>
          <CardImage>
            <img src={img3} alt="Fully Customizable" />
          </CardImage>
          <CardText>
            <AboutCardTitle>Fully Customizable</AboutCardTitle>
            <AboutText>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </AboutText>
          </CardText>
        </BrandCard>
      </CardRow>
    </AboutContainer>
  );
}