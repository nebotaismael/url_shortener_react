import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  gap: "2px",
  alignItems: "center",
  background: "none",
  border: "1px solid #2FB6EA",
  textTransform: "none",
  borderRadius: "40px",
  color: "white",
  padding: "5px 15px",
  fontSize: "12px",
  fontWeight: "300",
  fontFamily: "'Montserrat', sans-serif",
  height: "30px",
  [theme.breakpoints.down("desktop")]: {
    fontSize: " calc(10px + (12 - 10) * (100vw - 390px) / (1440 - 390))",
  },
  //   width: "90px",
}));
