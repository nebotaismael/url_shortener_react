import { Box, Divider, styled, Typography } from "@mui/material";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginRight: "2rem",
  flexDirection: "row",
  //position: "fixed",
  marginLeft: "2rem",
  [theme.breakpoints.down("sm")]: {
  //  marginLeft: "1rem",
  },
}));

export const NavbarLogo = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "80px",
  marginLeft: "3rem",
  marginRight: "7rem",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: "1rem",
  },
}));

export const NavLink = styled(Typography)(({ theme }) => ({
  color: "grey",
  fontSize: "1.2rem",
  textDecoration: "none",
  padding: "5px",
  marginRight: "2rem",
  marginLeft: "1rem",

  "&: hover": {
    color: "black",
    fontWeight: "bold",
  },
  "&.active": {
    fontWeight: "bold",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  marginRight: "2rem",
  marginTop: "2rem",
}));

export const NavButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  marginRight: "2rem",
  marginTop: "3rem",
  flexDirection: "row",
  marginLeft: "25rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavButton = styled(Box)(({ theme }) => ({
  fontWeight: "bold",
  paddingLeft: "20px",
  paddingTop: "5px",
  display: "flex",
  color: "white",
  backgroundColor: "rgba(0,255,255,0.9)",
  borderRadius: "20px",
  height: "30px",
  minWidth: "90px",
  flexDirection: "row",
  "&: hover": {
    backgroundColor: "rgba(0,255,255,0.5)",
    fontWeight: "bold",
  },
}));

export const DrawerE = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    backgroundColor: "rgba(40,20,66,1)",
    marginTop: "5rem",
    marginLeft: "3rem",
    maxWidth: "700px",
    borderRadius: "10px",
    maxHeight: "900px",
    zIndex: "18",
  },
}));
export const NavbarMobileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "2rem",
  flexDirection: "column",
  marginLeft: "2rem",
  width: "500px",
}));

export const NavbarMobileLogo = styled(Box)(({ theme }) => ({
  height: "30px",
  width: "70px",
  marginLeft: "3rem",
  marginRight: "4rem",
  marginTop: "2rem",
}));

export const MobileIcon = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
export const NavMobileLink = styled(Box)(({ theme }) => ({
  color: "grey",
  textDecoration: "none",
  padding: "5px",
  marginRight: "2rem",
  marginLeft: "1rem",

  "&: hover": {
    color: "black",
    fontWeight: "bold",
  },
  "&.active": {
    fontWeight: "bold",
  },
  [theme.breakpoints.down("md")]: {
    fontWeight: "bold",
    display: "flex",
    color: "white",
    flexDirection: "column",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "2rem",
  },
}));
export const NavMobileLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  marginRight: "2rem",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    width: "200px",
    flexDirection: "column",
    paddingLeft: "1rem",
    marginBottom: "1rem",
  },
}));
export const NavMobileLine = styled(Divider)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    width: "200px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "whiteSmoke",
    marginLeft: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));
export const NavMobileButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  marginRight: "2rem",
  marginTop: "3rem",
  flexDirection: "row",
  marginLeft: "25rem",
  [theme.breakpoints.down("md")]: {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
}));

export const NavMobileButton = styled(Box)(({ theme }) => ({
  fontWeight: "bold",
  paddingLeft: "20px",
  paddingTop: "5px",
  display: "flex",
  color: "white",
  backgroundColor: "rgba(0,255,255,0.9)",
  borderRadius: "20px",
  height: "30px",
  minWidth: "90px",
  flexDirection: "row",
  "&: hover": {
    backgroundColor: "rgba(0,255,255,0.5)",
    fontWeight: "bold",
  },
  [theme.breakpoints.down("md")]: {
    width: "120px",
    height: "40px",
    fontSize: "1.2rem",
    borderRadius: "50px",
    paddingLeft: "2rem",
    textAlign: "center",
    marginTop: "1rem",
    marginLeft: "2rem",
  },
}));

export const StyledMobileNav = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));