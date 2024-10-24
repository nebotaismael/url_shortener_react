import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppbarContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: "10px 20px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 13px",
  },
}));

export const AppbarLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.5rem",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("desktop")]: {
    gap: "12px",
  },
}));
export const AppbarItems = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "15px",
  fontWeight: "300",
  lineHeight: "18px",
  [theme.breakpoints.down("desktop")]: {
    fontSize: " calc(12px + (15 - 12) * (100vw - 390px) / (1440 - 390))",
  },
}));

export const AppbarItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "15px",
  fontWeight: "300",
  lineHeight: "18px",

  "&:hover": {
    background: theme.palette.warning.main,
  
    // border: "1px solid #DADADA",
    boxShadow: "1px 2px 2px gray",
  },

  [theme.breakpoints.down("desktop")]: {
    fontSize: " calc(12px + (15 - 12) * (100vw - 390px) / (1440 - 390))",
  },
}));
export const AppbarCTA = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.5rem",
  [theme.breakpoints.down("desktop")]: {
    gap: "12px",
  },
}));
export const AppbarButton = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
}));
export const AppbarBrand = styled(Box)(({ theme }) => ({
  //   width: "200px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "58px",
  [theme.breakpoints.down("desktop")]: {
    width: "160px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "110px",
    height: "25px",
    margin: "12px 0",
  },
}));
export const Hamburger = styled(Box)(({ border }) => ({
  width: "30px",
  height: "30px",
  background: "#11557E",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  border: border ? "1px solid black" : "none",
  cursor: "pointer",
}));
