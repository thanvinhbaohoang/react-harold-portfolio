


import React, { Component } from "react";
import {FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum} from "react-icons/fa";
import {DiUnitySmall,DiBootstrap,DiTerminal, DiReact,DiGithubBadge, DiJsBadge, DiLinux ,DiMongodb, DiPhotoshop,DiPython, DiJavascript} from "react-icons/di";

var skillsArray = [DiReact, DiUnitySmall, DiJsBadge, DiLinux, DiMongodb, DiPhotoshop, DiPython, FaBtc, FaEthereum, FaMonero, FaGithub]

class Skills extends Component {
    render() {
        return (
      <section class='skills-section'>
        <div class='section-title'>Skills That I Have</div>
        <div class= 'skill-tiles'>

            <div class='skill-icon-container'>
                <DiReact class='skill-icon'/>
                <p>React</p>
            </div>
        
            <div class='skill-icon-container'>
                <DiLinux class='skill-icon'/>
                <p>Linux</p>
            </div>
            <div class='skill-icon-container'>
                <DiJavascript class='skill-icon'/>
                <p>JavaScript</p>
            </div>
            <div class='skill-icon-container'>
                <DiPython class='skill-icon'/>
                <p>Python</p>
            </div>
            <div class='skill-icon-container'>
                <DiUnitySmall class='skill-icon'/>
                <p>Unity3D</p>
            </div>
            <div class='skill-icon-container'>
                <DiJavascript class='skill-icon'/>
                <p>JavaScript</p>
            </div>
            <div class='skill-icon-container'>
                <DiMongodb class='skill-icon'/>
                <p>MongoDB</p>
            </div>
            <div class='skill-icon-container'>
                <DiPhotoshop class='skill-icon'/>
                <p>Photoshop</p>
            </div>
            <div class='skill-icon-container'>
                <FaGithub class='skill-icon'/>
                <p>GitHub</p>
            </div>
        </div>

      </section>

 
        )
    }
}

export default Skills;

