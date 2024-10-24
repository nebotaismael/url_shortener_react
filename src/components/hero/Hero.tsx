import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroContainerLeft,
  HeroContainerRight,
  HeroText,
  HeroTitle,
} from "./Hero.styles";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContainerLeft>
        <HeroTitle>More than just shorter links</HeroTitle>
        <HeroText>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </HeroText>
        <HeroButton>Get Started</HeroButton>
      </HeroContainerLeft>
      <HeroContainerRight />
    </HeroContainer>
  );
}