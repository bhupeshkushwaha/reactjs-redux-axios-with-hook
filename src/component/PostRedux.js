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
  Skeleton,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/postActions";
import Navbar from "./Navbar";

class posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props.posts;
    console.log(posts);

    return (
      <>
        <CssBaseline />
        <Navbar />
        <Container>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Post By Redux</Typography>
          </Breadcrumbs>
          {posts.length > 0 ? (
            posts.map((post) => (
              <List
                key={post.id}
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
            ))
          ) : (
            <Skeleton
              animation="wave"
              height={150}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          )}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { getPosts })(posts);
