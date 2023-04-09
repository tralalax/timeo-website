import React, { Component } from "react";
import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";
import dataProjects from "./dataProjects.json";
import dataSkills from "./dataSkills.json";
import "animate.css/animate.min.css";

var name = (data.basic_info.name);
var sub_name = (data.basic_info.sub_name);
var github_link = (data.basic_info.github_link);
var about_title = (data.basic_info.about_title);
var text_box_content = (data.basic_info.text_box_content);
var project_title = (data.basic_info.project_title);
var skills_navbar = (data.basic_info.skills_navbar);
var github_button = (data.projects.github_button);
var skills_title = (data.basic_info.skills_title);
var copyright = (data.basic_info.copyright);

var projects = dataProjects.projects.cards.map(function (project, i) {
  return (
      <span className="projects-card-item">
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <Tooltip title={<h1 className="tooltip-title">{github_button}</h1>}>
          <a href={project.link} className="projects-card-github-button"></a>
        </Tooltip>
      </span>
  );
});

var skills = dataSkills.skills.cards.map(function (skill, i) {
  return (
      <Tooltip title={<h1 className="tooltip-title">{skill.tooltip}</h1>}>
        <span className="skills-icon-item">
          <div className={skill.class}></div>
          <p>{skill.name}</p>
        </span>
      </Tooltip>
  );
});


class Header extends Component {

  componentDidMount() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    const h1List = document.querySelectorAll("#home a");
    
    h1List.forEach((h1) => {
      h1.onmouseover = function(event) {  
        let iteration = 0;
        clearInterval(interval);
        
        interval = setInterval(function() {
          event.target.textContent = event.target.textContent
            .split("")
            .map(function(letter, index) {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
          
          if (iteration >= event.target.dataset.value.length) { 
            clearInterval(interval);
          }
          
          iteration += 1 / 3;
        }, 30);
      }
    })
  }


  render() {
    return (
      <header id="home" style={{height: window.innerHeight}}>

        <div className="nav-bar">
          <div className="nav-bar-center-section">
            <a data-value={skills_navbar} href="#skills" >{skills_navbar}</a>
          </div>
          <div className="nav-bar-center-section">
            <a data-value={project_title} href="#projects" >{project_title}</a>
          </div>
        </div>

        <div className="header-aligner">
          <div className="name-title">
            <div className="name-section">
              <h1>{name}</h1>
            </div>
            <div className="sub-name-section">
              <h1>{sub_name}</h1>
            </div>
          </div>

          <div className="about-me-section">
            <div className="text-box">
              <div className="text-box-title">
                <h1>{about_title}</h1>
              </div>
              <div className="text-box-content">
                <p>{text_box_content}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="social-link">
          <div className="github-link-box">
            <div className="github-profile-card">
              {/* TODO */}
            </div>
          </div>
          <div className="github-stats-box">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tralalax&langs_count=8&layout=compact&theme=rose_pine"></img>
          </div>
        </div>

        <section id="projects">
            <div className="projects-title">
              <h1>{project_title}</h1>
            </div>
            <div className="projects-card-box">
              {projects}
            </div>
        </section>

        <section id="skills">
            <div className="skills-title">
              <h1>{skills_title}</h1>
            </div>

          <div className="skills-icon-box">
            {skills}
          </div>
        </section>

        <footer>
          <div className="footer-copyright">{copyright}</div>
        </footer>

      </header>
    );
  }
}

export default Header;
