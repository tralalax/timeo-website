import React, { Component } from "react";
import data from "./data.json";

class Footer extends Component {
  render() {
    var copyright = (data.basic_info.copyright);

    return (
      <footer>
        <div className="footer-copyright">{copyright}</div>
      </footer>
    );
  }
}

export default Footer;