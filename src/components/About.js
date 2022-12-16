import React, { Component } from "react";
import Typical from "react-typical";
import data from "./data.json";

class About extends Component {
  render() {
    var about_title = (data.basic_info.about_title);
    var text_box_about_me_title = (data.basic_info.text_box_about_me_title);
    var text_box_content = (data.basic_info.text_box_content);

    return (
      <section id="about">
        <div className="about-title">
            <h1>
              <Typical steps={[about_title]}/>
            </h1>
        </div>
        <div className="text-box">
          <div className="text-box-item">
            <div className="text-box-header">
              <h2><Typical steps={[text_box_about_me_title]}/></h2>
            </div>
            <div className="text-box-body">
              <p>{text_box_content}</p>
            </div>
          </div>
        </div>


         
      </section>
    );
  }
}

export default About;
