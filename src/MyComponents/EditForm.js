import React, { useState } from "react";

export const EditForm = (props) => {
  const [editTitle, setEditTitle] = useState(props.editArr.title);
  const [editDesc, setEditDesc] = useState(props.editArr.desc);
  const onSubmit = (e) => {
      e.preventDefault();
      if(!editTitle || !editDesc) {
          alert("Title or Description cannot be blank");
      } else {
          const newArr = {
            sno: props.editArr.sno,
            title: editTitle,
            desc: editDesc
          }
          props.onEdit(newArr, true);
      }
  }

  return (
    <div className="my-3">
      <form onSubmit={onSubmit}>
        <h3>Add Post</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
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
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Update
        </button>
        <button type="reset" className="btn btn-sm btn-light" onClick={()=>{setEditTitle(""); setEditDesc("")}}>Reset</button>
      </form>
    </div>
  );
};
