import React, { Component } from "react";
import Typical from "react-typical";
import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";
import dataProjects from "./dataProjects.json";
import ScrollAnimation from "react-animate-on-scroll";

class Projects extends Component {
  render() {
    var project_title = (data.basic_info.project_title);
    var github_button = (data.projects.github_button);
    var wip_tooltip = (data.projects.wip_tooltip);

    var projects = dataProjects.projects.cards.map(function (project, i) {
      return (
        <ScrollAnimation animateIn="animate__zoomIn" delay={project.delay}>
            <span className="projects-card-item">
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <Tooltip title={<h1 className="tooltip-title">{github_button}</h1>}>
                <a href={project.link} className="projects-card-github-button"></a>
              </Tooltip>
            </span>
          </ScrollAnimation>
      );
    });

    return (
      <section id="projects">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="skills-title">
            <h1>
              <Typical steps={[project_title]}/>
            </h1>
        </div>
        </ScrollAnimation>
        <div className="projects-card-box">
          {projects}
        </div>
      </section>
    );
  }
}

export default Projects;
