import React from "react";
import { Drawer } from "@mui/material";

import { Link } from "react-router-dom";

import { MobileNavbarWrapper } from "./MobileDrawer.styles";

type NavbarProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileDrawer: React.FC<NavbarProps> = ({ toggle, setToggle }) => {
  // const theme = useTheme();

  return (
    <>
      <Drawer
        anchor="top"
        open={toggle}
        onClick={() => setToggle(!toggle)}
        sx={{
          "& .MuiDrawer-root": {
            position: "relative",
          },
          "& .MuiPaper-root": {
            position: "relative",
          },
          "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
            backgroundColor: "rgba(0,0,0,0)",
          },
          top: "70px",
        }}
      >
        <MobileNavbarWrapper>
          {/* <Typography variant="body1">
            <Link href="/">Dashboard</Link>
          </Typography>
          <hr />
          <Typography variant="body1">
            <Link href="/">Profile</Link>
          </Typography>
          <hr />
          <Typography variant="body1">
            <Link href="/">Logout</Link>
          </Typography>
          <hr /> */}

   
        </MobileNavbarWrapper>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
