import React, { Component } from "react";
import "./Posts.css";
import Post from "../../Components/Post/Post";
import axios from "axios";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
// import { Link } from "react-router-dom";
class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        //   console.log(res.data);
        const posts = res.data.slice(0, 4);
        const updatedPost = posts.map((post) => ({
          ...post,
          author: "Nishant",
        }));
        this.setState({ posts: updatedPost });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postSelectedHandler = (id) => {
    // console.log(id);
    this.props.history.push("/posts/" + id);
    this.setState({ selectedPostId: id });
  };
  render() {
    const posts = this.state.posts.map((post, ind) => (
      // <Link to={"/" + post.id} key={post.id}>
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
      />
      // </Link>
    ));
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}
export default Posts;
