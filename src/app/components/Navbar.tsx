import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <AppBar sx={{ background: "#EA8F79", color: "#9F609C" }} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          #LOGO
        </Typography>
        <Button color="inherit">
          <Link style={{ paddingLeft: "5px" }} href={"/"}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link style={{ paddingLeft: "5px" }} href={"/about"}>
            About
          </Link>
        </Button>
        <Button color="inherit">
          <Link style={{ paddingLeft: "5px" }} href={"/signup"}>
            Sign Up
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
