import React, { useState } from "react";
import logo from "../../images/logo.svg";

import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppbarBrand,
  AppbarButton,
  AppbarCTA,
  AppbarContainer,
  AppbarItems,
  AppbarLinks,
  Hamburger,
} from "./Navbar.styles";

import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { Link } from "react-router-dom";

import useTheme from "@mui/material/styles/useTheme";
import { CustomButton } from "../NavButton/NavButton";

type NavbarProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: boolean;
  setToggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = ({
  toggle,
  setToggle,
  toggleTheme,
  setToggleTheme,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [light, setLight] = useState(true);

  const handelThemeMode = () => {
    setLight(!light);
    setToggleTheme(!toggleTheme);
  };

  return (
    <AppbarContainer>
      <AppbarBrand>
        {mobile ? (
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="VES" />
          </Link>
        ) : (
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="VES" />
          </Link>
        )}
      </AppbarBrand>

      <AppbarCTA>
        {!matches && (
          <AppbarLinks>
            <AppbarItems variant="body1">
              <Link to="/">Features</Link>
            </AppbarItems>
            <AppbarItems variant="body1">
              <Link to="#">Pricing</Link>
            </AppbarItems>
            <AppbarItems variant="body1">
              <Link to="#">Resources</Link>
            </AppbarItems>
            <AppbarItems variant="body1">
              <Link to="#">Login</Link>
            </AppbarItems>
            <AppbarItems variant="body1">
              <Link to="/#">FAQ</Link>
            </AppbarItems>
          </AppbarLinks>
        )}
        <AppbarButton>
          {!mobile &&
            (light ? (
              <CustomButton
                sx={{
                  background: "#082637",
                  border: "none",
                  "&:hover": { background: "#082637" },
                }}
                onClick={() => handelThemeMode()}
              >
                Light Mode
                <LightModeIcon sx={{ fontSize: "18px" }} />
              </CustomButton>
            ) : (
              <CustomButton
                sx={{
                  background: "#082637",
                  border: "none",
                  "&:hover": { background: "#082637" },
                }}
                onClick={() => handelThemeMode()}
              >
                Dark Mode
                <DarkModeIcon sx={{ fontSize: "15px", color: "white" }} />
              </CustomButton>
            ))}
        </AppbarButton>
        {matches && (
          <>
            {mobile ? (
              <Hamburger border="" onClick={() => setToggle(!toggle)}>
                <MenuIcon style={{ color: "black" }} />
              </Hamburger>
            ) : (
              <Hamburger onClick={() => setToggle(!toggle)}>
                <MenuIcon />
              </Hamburger>
            )}
          </>
        )}
      </AppbarCTA>
    </AppbarContainer>
  );
};

export default Navbar;
