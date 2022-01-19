import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import PostAxios from "./component/PostAxios";
import PostRedux from "./component/PostRedux";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        {/* Nav Bar */}
        <BrowserRouter>
          <Box sx={{ display: "none" }}>
            <Link to={"/"}>Axios</Link>
            <Link to={"/redux"}>Redux</Link>
          </Box>

          <Routes>
            <Route exact path="/" element={<PostAxios />} />
            <Route exact path="redux" element={<PostRedux />} />
          </Routes>
        </BrowserRouter>

        <br />
      </Container>
    </div>
  );
}

export default App;
