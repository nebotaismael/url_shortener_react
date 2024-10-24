import { Box, Button, styled, Typography } from "@mui/material";
import img2 from "../../images/bg-boost-mobile.svg";
import img1 from "../../images/bg-boost-desktop.svg";

export const BoostContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  minWidth: "1330px",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(40,20,66,1)",
  paddingRight: "1rem",
  flexDirection: "column",
  backgroundImage: `url(${img1})`,
  marginTop: "0rem",
  minHeight: "240px",
  backgroundSize: "contain",
  backgroundPositionY: "start",
  [theme.breakpoints.down("md")]: {
    marginTop: "0rem",
    minWidth: "100%",
    backgroundImage: `url(${img2})`,
    minHeight: "270px",
  },
}));

export const BoostText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "3rem",
  paddingLeft: "1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "6rem",
    maxWidth: "100%",
    fontSize: "1.5rem",
  },
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  padding: "12px 36px",
  color: "white",
  backgroundColor: "cyan",
  borderRadius: "30px",
  margin: "0 auto",
  width: "20%",
  "&:hover": {
    backgroundColor: "darkcyan",
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));