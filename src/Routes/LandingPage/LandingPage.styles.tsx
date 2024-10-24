import { styled } from "@mui/material/styles";
import { Box  } from "@mui/material";
export const Background = styled(Box)(({ theme }) => ({
  background: theme.palette.warning.main,
  padding:"7px 0px",
}));
