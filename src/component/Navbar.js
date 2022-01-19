import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PostAxios from "./PostAxios";
import PostRedux from "./PostRedux";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Example
        </Typography>

        <Link to={"/"}>Axios</Link>
        <Link to={"/redux"}>Redux</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
