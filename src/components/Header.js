import React, { Component } from "react";
import Typical from "react-typical";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import data from "./data.json";

class Header extends Component {
  sub_titles = [];

  render() {
    var name = (data.basic_info.name);
    var github_link = (data.basic_info.github_link);
    var discord_link = (data.basic_info.discord_link);
    var youtube_link = (data.basic_info.youtube_link);
    var titles = (data.basic_info.titles);

    const particlesInit = async (main) => {
      console.log(main);
      await loadFull(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <div id="particles-js"><Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
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
              enable: true,
              opacity: 0.1,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 0.5,
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
        }}
      /></div>
        <div className="header-aligner" style={{height: '100%'}}>
          <div>
            <h1>
              <Typical steps={[name]}/>
            </h1>
            <div className="title-container">
              <Typical className="title-styles" steps={titles.map(x => [ x, 1500 ] ).flat()} loop={50}/>
            </div>
            <div className="social-link">
              <a href={github_link} className="github-button"></a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
