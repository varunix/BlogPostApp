import React from "react";

export const Post = ({ post, onDelete, setEditTrigger, onEdit }) => {
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
      &nbsp;
      <button
        className="btn btn-sm btn-warning"
        onClick={() => {
          setEditTrigger(true);
          onEdit(post);
        }}
      >
        Edit
      </button>
    </div>
  );
};
