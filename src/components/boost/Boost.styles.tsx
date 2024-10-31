import { Box, Button, Input, styled, Typography } from "@mui/material";
import img2 from "../../images/bg-boost-mobile.svg";
import img1 from "../../images/bg-boost-desktop.svg";
export const BoostContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  minWidth: "100%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(40,20,66,1)",
  flexDirection: "column",
  backgroundImage: `url(${img1})`,
  marginTop: "0rem",
  minHeight: "240px",
  backgroundSize: "100%",
  backgroundPositionY: "start",
  paddingLeft: "2em",
  [theme.breakpoints.down("md")]: {
    marginTop: "0rem",
    minWidth: "50%",
    backgroundImage: `url(${img2})`,
    height: "35vh",
    backgroundSize: "390px",
    backgroundPositionX: "right",
    backgroundPositionY: "left",
    maxWidth: "100%",
    paddingLeft: "1em",
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

export const BoostButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  paddingLeft: "20px",
  paddingTop: "5px",
  overflow:"hidden",
  textAlign: "center",
  paddingBottom: "1px",
  display: "flex",
  color: "white",
  backgroundColor: "rgba(0,255,255,0.9)",
  borderRadius: "50px",
  height: "50px",
  maxWidth: "200px",
  marginLeft: "40vw",
  flexDirection: "row", 
  marginTop: "3rem",
  "&: hover": {
    backgroundColor: "rgba(0,255,255,0.5)",
    fontWeight: "bold",
  },
  [theme.breakpoints.down("md")]: {

    marginTop: "1rem",
    width: "50%",
    marginLeft: "25vw",
  },
}));
