import React, { Component } from "react";
import Typical from "react-typical";
import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";
import dataSkills from "./dataSkills.json";
import ScrollAnimation from "react-animate-on-scroll";

class Skills extends Component {
  render() {
    var skills_title = (data.basic_info.skills_title);
    
    var skills = dataSkills.skills.cards.map(function (skill, i) {
      return (
        <ScrollAnimation animateIn="animate__zoomIn" delay={skill.delay}>
          <Tooltip title={<h1 className="tooltip-title">{skill.tooltip}</h1>}>
            <span className="skills-icon-item">
              <div className={skill.class}></div>
              <p>{skill.name}</p>
            </span>
          </Tooltip>
        </ScrollAnimation>
      );
    });

    return (
      <section id="skills">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="skills-title">
            <h1>
              <Typical steps={[skills_title]}/>
            </h1>
          </div>
        </ScrollAnimation>
        
        <div className="skills-icon-box">
          {skills}
        </div>

      </section>
    );
  }
}

export default Skills;
