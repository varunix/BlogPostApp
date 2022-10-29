import React from "react";

export const Post = ({ post, onDelete }) => {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(post);
        }}
      >
        Delete
      </button>
    </div>
  );
};
