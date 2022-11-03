import React, { useState } from "react";

export const AddToPosts = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addToPosts(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="my-3">
      <form onSubmit={submit}>
        <h3>Add Post</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Post Description
          </label>
          <textarea
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
        &nbsp;
        <button type="reset" className="btn btn-sm btn-light" onClick={()=>{setTitle(""); setDesc("")}}>Reset</button>
      </form>
    </div>
  );
};
