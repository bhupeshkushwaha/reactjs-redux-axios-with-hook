import {
  Avatar,
  Breadcrumbs,
  Container,
  CssBaseline,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const PostAxios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`/posts`).then((data) => {
      console.log("response", data);
      setPosts(data.data);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Post By Axios</Typography>
        </Breadcrumbs>
        {posts.map((post, key) => (
          <List
            key={key}
            sx={{
              width: "100%",
              maxWidth: "auto",
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>{post.id}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
          </List>
        ))}
      </Container>
    </>
  );
};

export default PostAxios;
