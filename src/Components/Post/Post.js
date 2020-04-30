import React from "react";
import "./Post.css";
export default function Post(props) {
  return (
    <article className="Post">
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">Author</div>
      </div>
    </article>
  );
}
