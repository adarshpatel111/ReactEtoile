import { useState } from "react";
import {
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const links = ["Home", "About", "Contact"];

  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        width: "100%",
        boxSizing: "border-box",
        height: "5rem",
        padding: "0 1rem",
        top: 0,
        left: 0,
        borderBottom: "1px solid #ccc",
        position: "sticky",
        zIndex: 100,
      }}
    >
      {/* Logo / Brand */}
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontFamily: "Montserrat",
          fontWeight: "bold",
        }}
      >
        ReactEtoile
      </Typography>

      {/* Desktop Links */}
      <Stack
        sx={{
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
          cursor: "pointer",
          fontSize: "1rem",
          fontFamily: "Montserrat",
          display: { xs: "none", md: "flex" },
          "& > div:hover": { color: "#92dcf7" },
        }}
      >
        {links.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </Stack>

      {/* Mobile Menu Button */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Drawer Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ p: 2, borderBottom: "1px solid #ddd" }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "Montserrat",
                fontSize: "1.1rem",
              }}
            >
              ReactEtoile
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          {/* Links */}
          <List>
            {links.map((link, index) => (
              <ListItemButton key={index} onClick={toggleDrawer(false)}>
                <ListItemText
                  primary={link}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
