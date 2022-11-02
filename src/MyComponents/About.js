import React from "react";

export const About = () => {
  let aboutHeading = {
    textAlign: "center",
    fontSize: "50px",
    fontFamily: "Fantasy"
  }

  return (
    <div className="container" style={aboutHeading}>
      <p>
        Welcome! I am Varun Chaubey, I have created this blog website using ReactJs where you can create, edit, like or delete blogs. You can use this website to write your own thoughts about anything. If you like something then you can also like the blog using like button and more people can get appreciation for their work. Happy Writing!!
      </p>
    </div>
  );
};

