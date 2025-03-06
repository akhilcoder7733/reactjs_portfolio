import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../assets/GamingLogo.png";
import CustomButton from "../CustomButton/CustomButton";
import CustomLink from "../CustomButton/CustomLink";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const HeaderBox = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  height: "15vh",
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const SmallBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "500",
  textDecoration: "none",
  color: "#6b28d1",
  cursor: "pointer",
  transition: "color 0.3s ease, transform 0.2s ease",
  "&:hover": {
    color: "#a166fa",
    transform: "scale(1.05)",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
}));

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // For md and sm screens
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Contact", icon: <ContactMailIcon /> },
    { text: "Profile", icon: <PersonIcon /> },
  ];

  return (
    <HeaderBox position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side - Logo & Links */}
        {isMobile ? (
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: 32, color: "#6b28d1" }} />
          </IconButton>
        ) : (
          <SmallBox>
            <img src={Logo} alt="logo" style={{ width: "60px", height: "60px", cursor: "pointer" }} />
            <StyledLink>Home</StyledLink>
            <StyledLink>About</StyledLink>
            <StyledLink>Contact</StyledLink>
            <StyledLink>Profile</StyledLink>
          </SmallBox>
        )}

        {/* Right Side - Login & Register */}
        {!isMobile && (
          <SmallBox>
            <CustomLink>Contact</CustomLink>
            <CustomButton variant="outlined">Hire Me!</CustomButton>
          </SmallBox>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{  padding: 2, backgroundColor: "#fff" }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={toggleDrawer(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <CustomButton fullWidth>Logout</CustomButton>
        </Box>
      </Drawer>
    </HeaderBox>
  );
}

export default Header;
