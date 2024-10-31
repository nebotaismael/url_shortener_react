import { Box, Card, Input, styled } from "@mui/material";

import img1 from "../../images/bg-shorten-desktop.svg";
import img2 from "../../images/bg-shorten-mobile.svg";

export const ShortenContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "90%",
  maxWidth: "800px",
  backgroundRepeat: "no-repeat",
  margin: "0 auto",
  borderRadius: "10px",
  backgroundColor: "rgba(40,20,66,1)",
  flexDirection: "row",
  backgroundImage: `url(${img1})`,
  height: "15vh",
  marginBottom: "15px", marginTop: "-65px",
  padding: "1rem",
  alignItems: "center",
  zIndex:2,


  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "90%",
    backgroundImage: `url(${img2})`,
    backgroundSize: "10vw",
    height: "auto",
    padding: "1rem",
  },
}));

export const ShortenedUrlCard = styled(Card)(({ theme }) => ({
  padding: "15px",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  width:"60%",
  margin: 'auto',
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    width: "90%",

 
  },
}));
export const ShortenInput = styled(Input)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: "white",
  flexGrow: 1,
  maxHeight: "50px",
  padding: "0.5rem 1rem",
  marginRight: "1rem",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "1rem",
    marginRight: 0,
  },
}));

export const ShortenButton = styled(Box)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",
  color: "white",
  backgroundColor: "rgba(0,255,255,0.9)",
  borderRadius: "10px",
  maxHeight: "50px",
  maxWidth: "150px",
  padding: "0.5rem 1rem",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "rgba(0,255,255,0.5)",

  },

  [theme.breakpoints.down("md")]: {
    width: "100%",maxWidth:'100%',minWidth:'50%',
    padding: "0.75rem",
  },
}));