import { Box, Card, Divider, styled, Typography } from "@mui/material";

export const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "whitesmoke",
  position: "relative",
  paddingTop: "5rem",
  paddingBottom: "5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  [theme.breakpoints.down("md")]: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  color: "black",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "grey",
  fontWeight: "400",
  textAlign: "center",
  marginBottom: "3rem",
}));

export const AboutCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "black",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
}));

export const BrandCard = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  maxWidth: "300px",
  margin: "1rem",
  padding: "2rem",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
 
  [theme.breakpoints.down("md")]: {
    margin: "1rem 0",
    top: "0",
  },
}));

export const CardText = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  padding: "2rem",
  backgroundColor: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}));

export const CardImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-25px",
  left: "20%",
  transform: "translateX(-50%)",
  zIndex: 1,
  backgroundColor: "white",
  borderRadius: "50%",
  padding: "10px",
  "& img": {
    width: "50px",
    height: "50px",
  },
}));

export const DividerLine = styled(Divider)(({ theme }) => ({
  backgroundColor: "cyan",
  height: "10px",
  width: "60%",
  margin: "-10px",
  position: "relative",
  top: "30vh",
  zIndex: 0, 
    [theme.breakpoints.down("md")]: {
  display: "none",
  },
}));

export const CardRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));