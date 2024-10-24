import { Box, styled, Typography } from "@mui/material";
import img1 from "../../images/footerlogo.svg";

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  display: "flex",
  flexDirection: "row",
  paddingTop: "3rem",
  paddingBottom: "4rem",
  paddingLeft: "5rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "0rem",
    minWidth: "95%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "2rem",
  },
}));

export const FooterColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "5rem",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: "4rem",
  },
}));

export const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  color: "white",
  fontWeight: "bold",
  marginBottom: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    color: "white",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "white",
  fontWeight: "100",
  lineHeight: "2rem",
}));
export const FooterIcon = styled(Box)(({ theme }) => ({
  height: "30px",
  width: "10px",
  marginLeft: "1rem",
  marginRight: "1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
    color: "white",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
}));
export const FooterRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "10rem",
  justifyContent: "space-evenly",
  height: "30px",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: "1rem",
    marginRight: "5rem",
  },
}));
export const FooterLogo = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  height: "30px",
  width: "150px",
  marginLeft: "3rem",
  marginRight: "4rem",
  marginTop: "2rem",
  backgroundImage: `url(${img1})`,
  fill: "white",
}));
