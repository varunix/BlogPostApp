import './App.css';
import Header from "./MyComponents/Header";
import {Body} from "./MyComponents/Body";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (post)=>{
    console.log("On Delete of post:", post);
    setPosts(posts.filter((e)=>{
      return e !== post;
    }));
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
    <Body posts={posts} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
