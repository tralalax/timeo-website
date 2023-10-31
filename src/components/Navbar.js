import React, { Component } from 'react';
import data from "./data.json";

var home_navbar = (data.basic_info.home_navbar);
var project_navbar = (data.basic_info.project_navbar);
var skills_navbar = (data.basic_info.skills_navbar);
var blog_navbar = (data.basic_info.blog_navbar);

class Navbar extends Component {
    timeouts = new Map();

    componentDidMount() {
        const elements = document.querySelectorAll('#navbar a');

        elements.forEach((element, index) => {
            const initialText = element.innerText;

            element.addEventListener('mouseover', () => this.startAnimation(element, initialText));
            element.addEventListener('mouseout', () => this.stopAnimation(element, initialText));

        });
    }

    animate = async (element, targetValue) => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let iteration = 0;
        const initialText = element.innerText;

        while (iteration < targetValue.length) {
            const randomText = Array.from({ length: targetValue.length }, (_, i) => {
                if (i < iteration) {
                    return targetValue[i];
                }
                return letters[Math.floor(Math.random() * 26)];
            }).join('');

            element.innerText = randomText + initialText.slice(targetValue.length);

            iteration += 1 / 3;
            await new Promise((resolve) => setTimeout(resolve, 30));
        }
    };

    startAnimation = (element, initialText) => {
        if (this.timeouts.has(element)) return; // Check if animation is already running for the element

        const targetValue = element.getAttribute('data-value') || ''; // Use empty string as fallback

        const timeout = setTimeout(() => {
            this.animate(element, targetValue).then(() => {
                this.timeouts.delete(element);
            });
        }, 100);

        this.timeouts.set(element, timeout);
    };

    stopAnimation = (element, initialText) => {
        const timeout = this.timeouts.get(element);
        if (timeout) {
            clearTimeout(timeout);
            this.timeouts.delete(element);
            element.innerText = initialText;
        }
    };



    render() {
        return (

        <div id="navbar" className="nav-bar">
            <div className="nav-bar-center-section">
                <a data-value={home_navbar} href="/home">{home_navbar}</a>
            </div>
            <div className="nav-bar-center-section">
                <a data-value={skills_navbar} href="/home#skills">{skills_navbar}</a>
            </div>
            <div className="nav-bar-center-section">
                <a data-value={project_navbar} href="/home#projects">{project_navbar}</a>
            </div>
            {/* <div className="nav-bar-center-section">
                <a data-value={blog_navbar} href="/blog">{blog_navbar}</a>
            </div> */}
        </div>

        );
  
    }
}

export default Navbar;
