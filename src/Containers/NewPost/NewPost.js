import React, { Component } from "react";
import axios from "axios";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Nishant",
  };
  AddPostHandler = () => {
    // console.log("clicked");

    const data = this.state;
    // console.log(data);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Nishant">Nishant</option>
          <option value="Only Nishant">Only Nishant</option>
        </select>
        <button onClick={this.AddPostHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
