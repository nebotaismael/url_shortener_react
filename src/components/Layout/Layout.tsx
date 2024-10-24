import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../styles/theme";
import Navbar from "../navbar/Navbar";

import Footer from "../footer/Footer";

type WebsiteLayout = {
  children: React.ReactNode;
  toggleTheme: boolean;
  setToggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout = ({ children }: WebsiteLayout) => {
  return (
    <Wrappper>
      <Navbar /><div>{children}</div>
      
      <Footer />
    </Wrappper>
  );
};

export default Layout;

export const Wrappper = styled(Box)({
  maxWidth: "100%",
  margin: "0 auto",
  position: "relative",
});
export const BodyContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: "50px 15px 15px 15px",
  // width: "100%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    padding: "50px 5px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "20px 15px",
  },
}));
export const LeftContainer = styled(Box)({
  height: "100%",
  [theme.breakpoints.up("md")]: {
    minHeight: "600px",
  },
});
export const RightContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: "0 0 0 10px",
  },
  color: "#000",
}));
export const MainContainer = styled(Box)({
  padding: "20px 0",
});
