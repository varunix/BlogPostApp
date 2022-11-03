import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export const Post = ({ post, onDelete, setEditTrigger, onEdit, onLike }) => {
  const iconStyle = {
    marginLeft: "80%",
    marginTop: "0px"
  };
  const buttonStyle = {
    marginLeft: "3px",
    fontFamily: "Century Gothic",
    fontSize: "15px",
    marginBottom: "0px"
  }

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        style={buttonStyle}
        onClick={() => {
          onDelete(post);
        }}
      >
        Delete
      </button>
      &nbsp;
      <button
        className="btn btn-sm btn-warning"
        style={buttonStyle}
        onClick={() => {
          setEditTrigger(true);
          onEdit(post);
        }}
      >
        Edit
      </button>
      &nbsp;
      <FontAwesomeIcon
        icon={faThumbsUp}
        style={iconStyle}
        size={"2x"}
        onClick={()=>{onLike(post)}}
      />
      <span style={buttonStyle}>{post.count}</span>
    </div>
  );
};
