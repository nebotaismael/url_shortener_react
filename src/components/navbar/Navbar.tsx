import {
  DrawerE,
  MobileIcon,
  NavbarContainer,
  NavbarLogo,
  NavbarMobileContainer,
  NavButton,
  NavButtons,
  NavLink,
  NavLinks,
  NavMobileButton,
  NavMobileButtons,
  NavMobileLine,
  NavMobileLink,
  NavMobileLinks,
} from "./Navbar.styles";
import logo from "../../images/logo.svg";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconButton } from "@mui/material";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const DrawerContent = (
    <NavbarMobileContainer>
      <NavMobileLinks>
        <NavMobileLink>features</NavMobileLink>
        <NavMobileLink>Pricing</NavMobileLink>
        <NavMobileLink>Resources</NavMobileLink>
      </NavMobileLinks>
      <NavMobileLine />
      <NavMobileButtons>
        <NavMobileLink>login</NavMobileLink>
        <NavMobileButton>Sign Up</NavMobileButton>
      </NavMobileButtons>
    </NavbarMobileContainer>
  );
  return (
    <>
      <NavbarContainer>
        <NavbarLogo>
          <img src={logo} alt="logo" />
        </NavbarLogo>
        <NavLinks>
          <NavLink>features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Resources</NavLink>
        </NavLinks>
        <NavButtons>
          <NavLink>login</NavLink>
          <NavButton>Sign Up</NavButton>
        </NavButtons>
        <MobileIcon>
          {" "}
          <IconButton
            onClick={handleDrawerToggle}
            style={{ marginLeft: "2rem", marginTop: "1.2rem" }}
          >
            <FaBars />
          </IconButton>
        </MobileIcon>
      </NavbarContainer>
      {mobileOpen && <DrawerE>{DrawerContent}</DrawerE>}
    </>
  );
}
