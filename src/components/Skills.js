import React, { Component } from "react";
import Typical from "react-typical";
import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";
import ScrollAnimation from "react-animate-on-scroll";

class Skills extends Component {
  render() {
    var skills_title = (data.basic_info.skills_title);

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
          <ScrollAnimation animateIn="animate__zoomIn" delay={0}>
            <Tooltip title={<h1 className="tooltip-title">Classique HTML pour le Web</h1>}>
              <span className="skills-icon-item">
                <div className="skills-html-icon"></div>
                <p>HTML</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={60}>
            <Tooltip title={<h1 className="tooltip-title">Classique CSS pour le Web</h1>}>
              <span className="skills-icon-item">
                <div className="skills-css-icon"></div>
                <p>CSS</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={120}>
            <Tooltip title={<h1 className="tooltip-title">ReactJS framework</h1>}>
              <span className="skills-icon-item">
                <div className="skills-reactjs-icon"></div>
                <p>REACT JS</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={180}>
            <Tooltip title={<h1 className="tooltip-title">Language Python</h1>}>
              <span className="skills-icon-item">
                <div className="skills-python-icon"></div>
                <p>PYTHON</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={240}>
            <Tooltip title={<h1 className="tooltip-title">Language Kotlin</h1>}>
              <span className="skills-icon-item">
                <div className="skills-kotlin-icon"></div>
                <p>KOTLIN</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={300}>
            <Tooltip title={<h1 className="tooltip-title">l'API de Discord en Python</h1>}>
              <span className="skills-icon-item">
                <div className="skills-discordpy-icon"></div>
                <p>DISCORD.PY</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={360}>
            <Tooltip title={<h1 className="tooltip-title">Docker & Portainer pour faire de la conteneurisation de services</h1>}>
              <span className="skills-icon-item">
                <div className="skills-docker-icon"></div>
                <p>DOCKER</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={420}>
            <Tooltip title={<h1 className="tooltip-title">Commande Linux, tout spécialement de l'expérience avec Ubuntu Server</h1>}>
              <span className="skills-icon-item">
                <div className="skills-linuxserver-icon"></div>
                <p>LINUX</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={480}>
            <Tooltip title={<h1 className="tooltip-title">Hébergement de site Web & services en HTTPS, config de DNS, Proxy, Firewall, NAT/PAT</h1>}>
              <span className="skills-icon-item">
                <div className="skills-networking-icon"></div>
                <p>NETWORKING</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" delay={540}>
            <Tooltip title={<h1 className="tooltip-title">Language Lua</h1>}>
              <span className="skills-icon-item">
                <div className="skills-lua-icon"></div>
                <p>LUA</p>
              </span>
            </Tooltip>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}

export default Skills;
