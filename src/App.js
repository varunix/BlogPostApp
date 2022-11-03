import "./App.css";
import Header from "./MyComponents/Header";
import { Body } from "./MyComponents/Body";
import { Footer } from "./MyComponents/Footer";
import React, { useEffect, useState } from "react";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddPostButton } from "./MyComponents/AddPostButton";
import { EditButton } from "./MyComponents/EditButton";

function App() {
  let initposts;
  if (localStorage.getItem("posts") === null) {
    initposts = [];
  } else {
    initposts = JSON.parse(localStorage.getItem("posts"));
  }

  const [buttonPopup, setButtonPopup] = useState(false);
  const [editButtonPopup, setEditButtonPopup] = useState(false);
  const [editArr, setEditArr] = useState();
  const [posts, setPosts] = useState(initposts);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const onDelete = (post) => {
    setPosts(
      posts.filter((e) => {
        return e !== post;
      })
    );

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  // useEffect(()=>console.log(editArr),[editArr]);
  // useEffect(()=>console.log(posts),[posts]);

  const onEdit = (post, update=false) => {
    setEditArr(()=>post);
    if(update){
      const newPost = posts.map(e => {
        if(e.sno === post.sno) {
          return {
            sno: post.sno,
            title: post.title,
            desc: post.desc
          }
        }
        return e;
      });
      setPosts(newPost);
    }
  }

  const addToPosts = (title, desc) => {
    let sno;
    if (posts.length === 0) {
      sno = 0;
    } else {
      sno = posts[posts.length - 1].sno + 1;
    }

    const myPost = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setPosts([...posts, myPost]);
  };

  return (
    <>
      <Router>
        <Header title="Blog Post" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <button onClick={() => setButtonPopup(true)} className="addButton btn btn-success btn-lg">Add</button>
                <AddPostButton addToPosts={addToPosts} trigger={buttonPopup} setTrigger={setButtonPopup} />
                <EditButton editTrigger={editButtonPopup} setEditTrigger={setEditButtonPopup} editArr={editArr} onEdit={onEdit}/>
                <Body posts={posts} onDelete={onDelete} onEdit={onEdit} setEditTrigger={setEditButtonPopup} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
