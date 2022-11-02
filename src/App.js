import "./App.css";
import Header from "./MyComponents/Header";
import { Body } from "./MyComponents/Body";
import { Footer } from "./MyComponents/Footer";
import React, { useEffect, useState } from "react";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddPostButton } from "./MyComponents/AddPostButton";

function App() {
  let initposts;
  if (localStorage.getItem("posts") === null) {
    initposts = [];
  } else {
    initposts = JSON.parse(localStorage.getItem("posts"));
  }

  const [buttonPopup, setButtonPopup] = useState(false);

  const onDelete = (post) => {
    setPosts(
      posts.filter((e) => {
        return e !== post;
      })
    );
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const addToPosts = (title, desc) => {
    console.log("Add this post", title, desc);
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
    console.log(myPost);
  };

  const [posts, setPosts] = useState(initposts);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

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
                <Body posts={posts} onDelete={onDelete} />
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
