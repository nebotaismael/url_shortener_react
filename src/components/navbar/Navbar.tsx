import { DrawerE, MobileIcon, NavbarContainer, NavbarLogo, NavbarMobileContainer, NavbarMobileLogo, NavButton, NavButtons, NavLink, NavLinks, NavMobileButton, NavMobileButtons, NavMobileLine, NavMobileLink, NavMobileLinks, StyledMobileNav } from "./Navbar.styles";
import logo from '../../images/logo.svg'
import { useState } from "react";
import {FaBars} from 'react-icons/fa'
import { IconButton, Drawer } from "@mui/material";
export default function Navbar(){
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () =>{
        setMobileOpen(!mobileOpen);
    }
    const DrawerContent =(
        <NavbarMobileContainer>
        
        <NavMobileLinks><NavMobileLink>Features</NavMobileLink>
        <NavMobileLink>Pricing</NavMobileLink>
        <NavMobileLink>Resources</NavMobileLink>
        </NavMobileLinks><NavMobileLine />
        <NavMobileButtons><NavMobileLink>login</NavMobileLink><NavMobileButton>Sign Up</NavMobileButton></NavMobileButtons>
        
                </NavbarMobileContainer>
    )
    return(
        <><NavbarContainer>
            <NavbarLogo><img src={logo} alt="logo" /></NavbarLogo>
            <NavLinks><NavLink>Features</NavLink>
                <NavLink>Pricing</NavLink>
                <NavLink>Resources</NavLink>
            </NavLinks>
            <NavButtons><NavLink>Login</NavLink><NavButton>Sign Up</NavButton></NavButtons>
           <MobileIcon> <IconButton onClick={handleDrawerToggle} style={{marginLeft:'4rem',marginTop:'-1rem'}}>
             <FaBars />
         </IconButton></MobileIcon>

        </NavbarContainer>
        {mobileOpen && (
        <DrawerE>{DrawerContent }</DrawerE>
        )}
        
        
        </>
    )
}