import React, { Component } from "react";
import Typical from "react-typical";
import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";
import ScrollAnimation from "react-animate-on-scroll";

class Projects extends Component {
  render() {
    var project_title = (data.basic_info.project_title);
    var github_button = (data.projects.github_button);
    var wip_tooltip = (data.projects.wip_tooltip);
    var card_a_title = (data.projects.card_a_title);
    var card_b_title = (data.projects.card_b_title);
    var card_c_title = (data.projects.card_c_title);
    var card_d_title = (data.projects.card_d_title);
    var card_a_text = (data.projects.card_a_text);
    var card_b_text = (data.projects.card_b_text);
    var card_c_text = (data.projects.card_c_text);
    var card_d_text = (data.projects.card_d_text);
    var card_a_link = (data.projects.card_a_link);
    var card_b_link = (data.projects.card_b_link);
    var card_c_link = (data.projects.card_c_link);
    var card_d_link = (data.projects.card_d_link);

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
          <ScrollAnimation animateIn="animate__zoomIn" animateOut="animate__zoomOutUp">
            <span className="projects-card-item">
              <h3>{card_a_title}</h3>
              <p>{card_a_text}</p>
              <Tooltip title={<h1 className="tooltip-title">{github_button}</h1>}>
                <a href={card_a_link} className="projects-card-github-button"></a>
              </Tooltip>
            </span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOut="animate__zoomOutUp" delay={60}>
            <span className="projects-card-item">
              <h3>{card_b_title}</h3>
              <p>{card_b_text}</p>
              <Tooltip title={<h1 className="tooltip-title">{github_button}</h1>}>
                <a href={card_b_link} className="projects-card-github-button"></a>
              </Tooltip>
            </span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOut="animate__zoomOutUp" delay={120}>
            <span className="projects-card-item">
              <h3>{card_c_title}</h3>
              <p>{card_c_text}</p>
              <Tooltip title={<h1 className="tooltip-title">{github_button}</h1>}>
                <a href={card_c_link} className="projects-card-github-button"></a>
              </Tooltip>
            </span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOut="animate__zoomOutUp" delay={180}>
            <span className="projects-card-item">
              <h3>{card_d_title}</h3>
              <p>{card_d_text}</p>
            </span>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}

export default Projects;
