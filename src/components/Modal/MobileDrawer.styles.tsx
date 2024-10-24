import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
export const MobileNavbarWrapper = styled(Box)(({theme}) => ({
  padding: "20px",
  "& a": {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "24px",
    color: theme.palette.warning.dark,
  },
  "& hr": {
    margin: "10px 0",
    border: "1px solid #EFEFEF",
  },
}));
