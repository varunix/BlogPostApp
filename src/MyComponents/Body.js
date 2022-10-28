import React from 'react';
import { Post } from './Post';

export const Body = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Post List</h3>
      {props.posts.length == 0? "No Posts to Display" :
      props.posts.map((post) => {
          return <Post post={post} key={post.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}
