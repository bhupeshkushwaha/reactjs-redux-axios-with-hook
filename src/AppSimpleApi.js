import React, { useEffect, useState } from "react";
import axios from "./axios";
import Post from "./Post";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Skeleton } from "@mui/material";

function AppSimpleApi() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        {posts.length > 0 ? (
          <Post posts={posts} />
        ) : (
          <Skeleton
            animation="wave"
            height={150}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        )}
      </Container>
    </div>
  );
}

export default AppSimpleApi;
