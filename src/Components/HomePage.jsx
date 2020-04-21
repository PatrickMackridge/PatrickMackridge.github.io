import React from "react";
import mePicture from "../images/MeOnnaLake.jpeg";
import introText from "../Data/IntroText";

const HomePage = () => {
  return (
    <>
      <h1 class="title" id="myName">
        Patrick Mackridge
      </h1>
      <div class="homePageInfo">
        <p class="introText">{introText}</p>
        <img
          src={mePicture}
          class="mePicture"
          alt="Me standing on a frozen Norwegian lake"
        />
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
