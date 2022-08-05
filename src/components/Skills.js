


import React, { Component } from "react";
import {FaPython,FaReact, FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum, FaLinux, FaCode} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {DiUnitySmall,DiBootstrap,DiTerminal, DiReact,DiGithubBadge, DiJsBadge, DiLinux ,DiMongodb, DiPhotoshop,DiPython, DiJavascript} from "react-icons/di";


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
                <DiPython class='skill-icon'/>
                <p>React</p>
            </div>
            <div class='skill-icon-container'>
                <DiPython class='skill-icon'/>
                <p>React</p>
            </div>
            <div class='skill-icon-container'>
                <DiPython class='skill-icon'/>
                <p>React</p>
            </div>
        </div>

      </section>

 
        )
    }
}

export default Skills;

