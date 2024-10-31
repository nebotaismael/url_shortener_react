import React from "react";
import {
  AboutContainer,
  AboutText,
  AboutTitle,
  BrandCard,

  CardImage,
  CardRow,
  DividerLine,
  AboutCardTitle,
  DividerLinetwo,
} from "./About.styles";
import img1 from "../../images/icon-brand-recognition.svg";
import img2 from "../../images/icon-detailed-records.svg";
import img3 from "../../images/icon-fully-customizable.svg";

export default function About() {
  return (
    <AboutContainer>
      <br></br>  <br></br><br></br><br></br>
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
    
            <AboutCardTitle>Brand Recognition</AboutCardTitle>
            <AboutText>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
  
              </AboutText>
        </BrandCard>
        <DividerLinetwo /> 
        <BrandCard style={{ top: "30px", zIndex: 1 , }}>
          <CardImage>
            <img src={img2} alt="Detailed Records" />
          </CardImage>
     
            <AboutCardTitle>Detailed Records</AboutCardTitle>
            <AboutText>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </AboutText>
     
        </BrandCard><DividerLinetwo /> 
        <BrandCard style={{ top: "70px", zIndex: 1 }}>
          <CardImage>
            <img src={img3} alt="Fully Customizable" />
          </CardImage>
    
            <AboutCardTitle>Fully Customizable</AboutCardTitle>
            <AboutText>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </AboutText>
      
        </BrandCard>
      </CardRow>
    </AboutContainer>
  );
}