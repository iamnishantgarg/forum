import React, { Component } from "react";
import axios from "axios";
import Post from "../../Components/Post/Post";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      //   console.log(res.data);
      this.setState({ posts: res.data });
    });
  }
  render() {
    const posts = this.state.posts.map((post, ind) => (
      <Post key={post.id} title={post.title} />
    ));
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
