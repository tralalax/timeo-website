import React, { Component } from "react";
import Typical from "react-typical";
import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";

class Skills extends Component {
  render() {
    var skills_title = (data.basic_info.skills_title);

    return (
      <section id="skills">
          <div className="skills-title">
            <h1>
              <Typical steps={[skills_title]}/>
            </h1>
          </div>
          <div className="skills-icon-box">
            <Tooltip title={<h1 className="tooltip-title">Classique HTML pour le Web</h1>}>
              <span className="skills-icon-item">
                <div className="skills-html-icon"></div>
                <p>HTML</p>
              </span>
            </Tooltip>
            <Tooltip title={<h1 className="tooltip-title">Classique CSS pour le Web</h1>}>
              <span className="skills-icon-item">
                <div className="skills-css-icon"></div>
                <p>CSS</p>
              </span>
            </Tooltip>
            <Tooltip title={<h1 className="tooltip-title">ReactJS framework</h1>}>
              <span className="skills-icon-item">
                <div className="skills-reactjs-icon"></div>
                <p>REACT JS</p>
              </span>
            </Tooltip>
            <Tooltip title={<h1 className="tooltip-title">Language Python</h1>}>
              <span className="skills-icon-item">
                <div className="skills-python-icon"></div>
                <p>PYTHON</p>
              </span>
            </Tooltip>
            <Tooltip title={<h1 className="tooltip-title">l'API de Discord en Python</h1>}>
              <span className="skills-icon-item">
                <div className="skills-discordpy-icon"></div>
                <p>DISCORD.PY</p>
              </span>
            </Tooltip>
            <Tooltip title={<h1 className="tooltip-title">Docker & Portainer pour faire de la conteneurisation de services</h1>}>
              <span className="skills-icon-item">
                <div className="skills-docker-icon"></div>
                <p>DOCKER</p>
              </span>
            </Tooltip>
            <Tooltip title={<h1 className="tooltip-title">Commande Linux, tout spécialement de l'expérience avec Ubuntu Server</h1>}>
              <span className="skills-icon-item">
                <div className="skills-linuxserver-icon"></div>
                <p>LINUX</p>
              </span>
            </Tooltip>
            <Tooltip title={<h1 className="tooltip-title">Hébergement de site Web & services en HTTPS, config de DNS, Proxy, Firewall, NAT/PAT</h1>}>
              <span className="skills-icon-item">
                <div className="skills-networking-icon"></div>
                <p>NETWORKING</p>
              </span>
            </Tooltip>
          </div>
      </section>
    );
  }
}

export default Skills;
