import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Background = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper, // Use backgroundColor
  padding: "7px 0px",
}));