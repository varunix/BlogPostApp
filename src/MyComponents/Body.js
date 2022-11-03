import React, { Fragment } from "react";
import { Post } from "./Post";

export const Body = (props) => {
  const postStyle = {
    "wordWrap": "break-word",
  };
  const lineStyle = {
    "borderTop": "1px solid black",
    "marginTop": "1%",
    "marginBottom": "1%",
  };

  return (
    <div className="container">
      <h3 className="my-3">Post List</h3>
      {props.posts.length === 0
        ? "No Posts to Display"
        : props.posts.map((post) => {
            return (
              <Fragment key={post.sno}>
                <div style={postStyle}>
                  <Post
                    post={post}
                    onDelete={props.onDelete}
                    setEditTrigger={props.setEditTrigger}
                    onEdit={props.onEdit}
                    onLike={props.onLike}
                  />
                  <div style={lineStyle} />
                </div>
              </Fragment>
            );
          })}
    </div>
  );
};
