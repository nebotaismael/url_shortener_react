import {
  FooterColumn,
  FooterContainer,
  FooterIcon,
  FooterLogo,
  FooterRow,
  FooterText,
  FooterTitle,
} from "./Footer.styles";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import inst from "../../images/icon-instagram.svg";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo />
      <FooterColumn>
        <FooterTitle>Features</FooterTitle>
        <FooterText>Link Shortening</FooterText>
        <FooterText>Branded Links</FooterText>
        <FooterText>Analytics</FooterText>
      </FooterColumn>{" "}
      <FooterColumn>
        <FooterTitle>Resources</FooterTitle>
        <FooterText>Blog</FooterText>
        <FooterText>Developers</FooterText>
        <FooterText>Support</FooterText>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Company</FooterTitle>
        <FooterText>About</FooterText>
        <FooterText>Our Team</FooterText>
        <FooterText>Careers</FooterText>
        <FooterText>Contact</FooterText>
      </FooterColumn>
      <FooterRow>
        <FooterIcon>
          <img src={facebook} alt="facebook" />
        </FooterIcon>
        <FooterIcon>
          {" "}
          <img src={twitter} alt="twitter" />
        </FooterIcon>
        <FooterIcon>
          <img src={pinterest} alt="pinterest" />
        </FooterIcon>
        <FooterIcon>
          <img src={inst} alt="inst" />
        </FooterIcon>
      </FooterRow>
    </FooterContainer>
  );
}
