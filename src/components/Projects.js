import React, { Component } from "react";
import Typical from "react-typical";
import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";

class Projects extends Component {
  render() {
    var project_title = (data.basic_info.project_title);

    return (
      <section id="projects">
        <div className="skills-title">
            <h1>
              <Typical steps={[project_title]}/>
            </h1>
        </div>
        <div className="projects-card-box">
          <span className="projects-card-item">
            <h3>Minecraft Server Installer</h3>
            <p>Minecraft Server Installer est un petit script codé en lua qui permet de crée des serveurs minecraft facilement sous Linux. Le script vous demande de rentré le nom pour le dossier du serveur minecraft et ca version. Puis il télechargera et executera l'installateur tout seul en acceptant l'EULA et installant Screen et Java pour lancer le serveur minecraft</p>
            <Tooltip title={<h1 className="tooltip-title">Liens de la Repo du project</h1>}>
              <a href="https://github.com/tralalax/MCserver-installer" className="projects-card-github-button"></a>
            </Tooltip>
          </span>
          <span className="projects-card-item">
            <h3>Ce Web Site</h3>
            <p>Mon site portfolio réaliser sans template en ReactJS</p>
            <Tooltip title={<h1 className="tooltip-title">Liens de la Repo du project</h1>}>
              <a href="https://github.com/tralalax/MCserver-installer" className="projects-card-github-button"></a>
            </Tooltip>
          </span>
          <span className="projects-card-item">
            <h3>Youtube Playlist Downloader</h3>
            <p>Il s'aggit d'une application mobile réalisé en Kotlin qui permet de télecharger automatiquement des musiques depuis une playlist Youtube. Par example si vous rajouté des musiques à votre playlist sur youtube, l'application télechargera automatiquement celle que vous avez rajouté sur votre télephone. Il est possible de changer le dossier de stockage des télechargement, l'URL de la playlist ainsi que l'heure de la syncronisation</p>
            <Tooltip title={<h1 className="tooltip-title">Liens de la Repo du project</h1>}>
              <a href="https://github.com/tralalax/MCserver-installer" className="projects-card-github-button"></a>
            </Tooltip>
          </span>
          <span className="projects-card-item">
            <h3>EasyPartner Discord Bot</h3>
            <p>imaginer une liste de 600 élement et vous devez faire des paire de 2 élements avec toute la liste toute les heures mais vous ne pouvez pas refaire les meme paire que les heure d'avant. comment vous faite ?</p>
            <Tooltip title={<h1 className="tooltip-title">Liens de la Repo du project</h1>}>
              <a href="https://github.com/tralalax/MCserver-installer" className="projects-card-github-button"></a>
            </Tooltip>
          </span>

        </div>

      </section>
    );
  }
}

export default Projects;
