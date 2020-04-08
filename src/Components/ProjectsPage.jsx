import React from "react";

const ProjectsPage = () => {
  return (
    <>
      <h1 class="title">Projects</h1>
      <div class="projectPane">
        <div class="projectBox">
          <p class="proj-name">Wormplay</p>
          <p class="proj-desc">Wormplay desc</p>
        </div>
        <div class="projectBox">
          <p class="proj-name">NC-News</p>
          <p class="proj-desc">nc-news desc</p>
        </div>
        <div class="projectBox">
          <p class="proj-name">Browser Beat</p>
          <p class="proj-desc">browser beat desc</p>
        </div>
        <div class="projectBox">
          <p class="proj-name">Meteorite Landings</p>
          <p class="proj-desc">Meteorite Landings desc</p>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
