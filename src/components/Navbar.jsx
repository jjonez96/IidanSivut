import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";

const pages = ["Etusivu", "Kynnet"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const drawerWidth = 240;
  return (
    <AppBar
      position="fixed"
      style={{
        background: "rgba(255, 255, 255, 0.10)",
        backdropFilter: "blur(7px)",
      }}
    >
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Typography variant="h4" component="div"></Typography>
          <Box
            sx={{
              display: { alignItems: "flex-start", xs: "flex", md: "none" },
            }}
          >
            <IconButton
              onClick={handleOpenNavMenu}
              style={{
                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Drawer
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      boxSizing: "border-box",
                    },
                  }}
                  variant="permanent"
                  anchor="right"
                >
                  <MenuItem key={page}>
                    <Link
                      style={{
                        fontSize: "1.3em",
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "Roboto",
                      }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </MenuItem>
                  <Divider />
                </Drawer>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1.4em",
                    fontFamily: "Roboto",
                    textShadow: "1px 1px #000",
                    color: "#d9d6f1",
                  }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
