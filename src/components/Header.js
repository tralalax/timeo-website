import Tooltip from '@mui/material/Tooltip';
import data from "./data.json";
import dataProjects from "./dataProjects.json";
import dataSkills from "./dataSkills.json";
import "animate.css/animate.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { Component } from 'react';

var name = (data.basic_info.name);
var sub_name = (data.basic_info.sub_name);
var github_link = (data.basic_info.github_link);
var github_link_name = (data.basic_info.github_link_name);
var linkedin_link = data.basic_info.linkedin_link;
var linkedin_link_name = data.basic_info.linkedin_link_name;
var about_title = (data.basic_info.about_title);
var text_box_content = (data.basic_info.text_box_content);
var project_title = (data.basic_info.project_title);
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

    render() {

        const particlesInit = async (main) => {
            await loadFull(main);
        };

        return (
            <><Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push"
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                            opacity: 0.1,
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.1,
                            width: 1
                        },
                        collisions: {
                            enable: false
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: false,
                            speed: 0.2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }} />

                <header id="home">

                    <div className="header-aligner">
                        <div className="name-title">
                            <div className="name-section">
                                <h1>{name}</h1>
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
                                <a href={github_link}>
                                    <h4>{github_link_name}</h4>
                                    <div className="github-profile-card-icon"></div>
                                </a>
                            </div>
                        </div>
                        <div className="github-stats-box">
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tralalax&langs_count=6&layout=compact&theme=rose_pine"></img>
                        </div>
                        <div className="github-link-box">
                            <div className="github-profile-card">
                                <a href={linkedin_link}>
                                    <h4>{linkedin_link_name}</h4>
                                    <div className="github-profile-card-icon"></div>
                                </a>
                            </div>
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

                </header></>
        );
    }
}

export default Header;
