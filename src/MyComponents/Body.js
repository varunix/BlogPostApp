import React from 'react';
import { Post } from './Post';

export const Body = (props) => {
  let bodyStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }

  return (
    <div className='container' style={bodyStyle}>
      <h3 className='my-3'>Post List</h3>
      {props.posts.length === 0? "No Posts to Display" :
      props.posts.map((post) => {
          return(
            <><Post post={post} key={post.sno} onDelete={props.onDelete} /><hr /></>
          )
      })}
    </div>
  )
}
