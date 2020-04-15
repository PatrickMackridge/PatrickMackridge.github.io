import React from "react";
import mePicture from "../images/MeOnnaLake.jpeg";

const HomePage = () => {
  return (
    <>
      <h1 class="title" id="myName">
        Patrick Mackridge
      </h1>
      <div class="mePictureInfo">
        <p class="introText">
          A person with a website cos I'm cool. Write more stuff here about me.
          There's a picture of me. Have a look around at my projects. Get in
          touch via contacts page etc etc. Say some more stuff, get an idea of
          space within the box...
        </p>
        <img src={mePicture} class="mePicture" alt="Me" />
        <ul class="exp">
          <h3>Experience</h3>
          <li>Northcoders Bootcamp: Jan 2020 - April 2020</li>
          <li>Data Production Analyst: June 2018 - Jan 2020</li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
