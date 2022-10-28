import './App.css';
import Header from "./MyComponents/Header";
import {Body} from "./MyComponents/Body";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';
import {AddToPosts} from './MyComponents/AddToPosts';

function App() {
  const onDelete = (post)=>{
    console.log("On Delete of post:", post);
    setPosts(posts.filter((e)=>{
      return e !== post;
    }));
  }

  const addToPosts = (title, desc)=>{
    console.log("Add this post", title, desc);
    let sno;
    if(posts.length === 0) {
      sno = 0;
    } else {
      sno = posts[posts.length-1].sno + 1;
    }
    const myPost = {
      sno: sno,
      title: title,
      desc: desc
    }
    setPosts([...posts, myPost]);
  }
  
  const [posts, setPosts] = useState([
    {
      sno: 1,
      title: "Lorem ipsum dolor sit.First",
      desc: "Lorem ipsum dolor sit amet c First onsectetur adipisicing elit. Eaque, explicabo?"
    },
    {
      sno: 2,
      title: "Lorem ipsum dolor sit.Second",
      desc: "Lorem ipsum dolor sit amet co Second nsectetur adipisicing elit. Eaque, explicabo?"
    },
    {
      sno: 3,
      title: "Lorem ipsum dolor sit.Third",
      desc: "Lorem ipsum dolor sit amet consectet Third ur adipisicing elit. Eaque, explicabo?"
    },
  ]);

  return (
    <>
    <Header title="Blog Post" searchBar={false}/>
    <AddToPosts addToPosts={addToPosts}/>
    <Body posts={posts} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
