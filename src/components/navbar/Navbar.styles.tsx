import { Box, Divider, styled, Typography } from "@mui/material";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginRight: "2rem",
  flexDirection: "row",
  margin:"0 auto",
  overflow:"hidden",
  [theme.breakpoints.down("md")]: {
   
  },
}));

export const NavbarLogo = styled(Box)(({ theme }) => ({
  height: "60px",
  width: "90px",
  marginLeft: "3rem",
  marginRight: "7rem",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {

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
  marginTop: "1rem",
}));

export const NavButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  marginRight: "2rem",
  marginTop: "1rem",
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
    marginTop: "-1rem",marginRight:'5rem',
    marginLeft: "1rem",
    maxWidth: "100%",width:'90%',minWidth:'50%',
    borderRadius: "10px",
    maxHeight: "900px",
    zIndex: "18",
  },
}));
export const NavbarMobileContainer = styled(Box)(({ theme }) => ({
  display: "flex",textAlign:'center',
  marginTop: "2rem",
  flexDirection: "column",
  marginLeft: "3rem",
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
    paddingLeft: "2rem",
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
    width:'100%',minWidth:'50%',maxWidth:'100%',
    height: "40px",
    fontSize: "1.2rem",
    borderRadius: "50px",
    paddingLeft: "4rem",
    textAlign: "center",
    marginTop: "1rem",
    marginLeft: "0rem",paddingTop:'4%'
  },
}));

export const StyledMobileNav = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
