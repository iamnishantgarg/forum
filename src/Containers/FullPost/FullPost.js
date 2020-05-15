import React, { Component } from "react";
import "./FullPost.css";
import axios from "axios";
export default class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    // console.log(this.props );
    this.loadData();
  }
  componentDidUpdate() {
    this.loadData();
  }
  loadData() {
    if (this.props.match.params.id) {
      if (
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id) ||
        this.state.loadedPost == null
      ) {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/" +
              this.props.match.params.id
          )
          .then((res) => {
            console.log(res.data);
            this.setState({ loadedPost: res.data });
          });
      }
    }
  }
  deletePostHandler = () => {
    axios
      .delete(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.props.match.params.id
      )
      .then((res) => {
        console.log("deltepost:", res);
      });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}
