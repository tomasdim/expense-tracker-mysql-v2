import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ flexGrow: 1 }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 0 }}
          >
            Tracker
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

          <Link className="links" to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link className="links" to="/operations">
            <Button color="inherit">Operations</Button>
          </Link>
          <Link className="links" to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
