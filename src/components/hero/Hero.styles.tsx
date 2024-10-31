import { Box, styled, Typography, Button } from "@mui/material";
import hero from "../../images/illustration-working.svg";

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 8rem",
  maxWidth: "100%",
  width: "100%",
  backgroundColor: "white",
  overflow: "hidden", // Prevent horizontal scrolling
  paddingBottom:"9rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
    padding: "4rem 2rem",
    paddingBottom:"9rem",
    margin: "0 auto",
  },
}));

export const HeroContainerLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  paddingRight: "2rem",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    alignItems: "center",
    marginTop: "2rem",
    paddingRight: "0",
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  color: "black",
  fontWeight: "bold",
  marginBottom: "1rem",
  lineHeight: "1.2",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    textAlign: "center",
  },
}));

export const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: "grey",
  marginBottom: "2rem",
  lineHeight: "1.5",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "1rem",
  },
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  padding: "12px 36px",
  color: "white",
  backgroundColor: "cyan",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "darkcyan",
  },
  [theme.breakpoints.down("md")]: {

  },
}));

export const HeroContainerRight = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundImage: `url(${hero})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "50vh",
  transform: "translateX(30%) scale(1.2)", // Translate to the right
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "250px",
    marginBottom: "2rem",
    transform: "translateX(30%) scale(1.5)",
  },
}));