import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
import { useAppSelector } from "../../redux/hooks";

const Navbar = () => {
  const user = useAppSelector((state) => state.userInfo);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile drawer
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const MenuBox = styled(List)({
    display: "flex",
    gap: 50,
  });

  const MenuItems = [
    { Name: "Services", Link: "/services" },
    { Name: "Our Story", Link: "/story" },
    { Name: "View Schedule", Link: "/appointment" },
    { Name: "My Account", Link: user.id ? "/dashboard" : "/login" },
    { Name: "Blog/News", Link: '/blog' },
  ];

  return (
      <AppBar sx={{ background: "#2c3e50" }} position={"static"}>
        <StyledToolbar>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>

          {/* IconButton for mobile view */}
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu for desktop view */}
          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {MenuItems.map((item, index) => (
                <Typography
                    key={index}
                    sx={{
                      cursor: "pointer",
                      fontSize: "24px",
                      padding: "0 15px"
                    }}
                >
                  <Link href={item.Link}>
                    {item.Name}
                  </Link>
                </Typography>
            ))}
          </MenuBox>
        </StyledToolbar>

        {/* Drawer for mobile view */}
        <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {MenuItems.map((item, index) => (
                  <ListItem
                      key={index}
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={item.Link}>
                    <ListItemText primary={item.Name} />
                    </Link>
                  </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Existing Menu component */}
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpen(!open)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
        >
          <Box sx={{ width: 350, height: "90vh" }}>
            {MenuItems.map((item, index) => (
                <MenuItem
                    key={index}
                    sx={{
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                >
                  {item.Name}
                </MenuItem>
            ))}
          </Box>
        </Menu>
      </AppBar>
  );
};

export default Navbar;
