import React from "react";
import projectInfo from "../Data/ProjectInfo";

const ProjectsPage = () => {
  return (
    <>
      <h1 class="title">Projects</h1>
      <div class="projectPane">
        <div class="projectBox">
          <p class="proj-name">Wormplay</p>
          <p class="proj-desc">{projectInfo.wormplay.desc}</p>
          <div class="proj-links">
            <a href={projectInfo.wormplay.feHosted}>Hosted</a>
            <a href={projectInfo.wormplay.beHosted}>API</a>
            <a href={projectInfo.wormplay.feRepo}>FE-Repo</a>
            <a href={projectInfo.wormplay.beRepo}>BE-Repo</a>
          </div>
        </div>
        <div class="projectBox">
          <p class="proj-name">NC-News</p>
          <p class="proj-desc">{projectInfo.ncNews.desc}</p>
          <div class="proj-links">
            <a href={projectInfo.ncNews.feHosted}>Hosted</a>
            <a href={projectInfo.ncNews.beHosted}>API</a>
            <a href={projectInfo.ncNews.feRepo}>FE-Repo</a>
            <a href={projectInfo.ncNews.beRepo}>BE-Repo</a>
          </div>
        </div>
        <div class="projectBox">
          <p class="proj-name">Browser Beat</p>
          <p class="proj-desc">{projectInfo.browserBeat.desc}</p>
          <div class="proj-links">
            <a href={projectInfo.browserBeat.hosted}>App</a>
            <a href={projectInfo.browserBeat.repo}>GitHub repo</a>
          </div>
        </div>
        <div class="projectBox">
          <p class="proj-name">Mapping Meteorites</p>
          <p class="proj-desc">{projectInfo.mappingMeteorites.desc}</p>
          <div class="proj-links">
            <a href={projectInfo.mappingMeteorites.hosted}>App</a>
            <a href={projectInfo.mappingMeteorites.repo}>GitHub repo</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
