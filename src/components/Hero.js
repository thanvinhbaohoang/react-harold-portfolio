import React, { Component } from "react";
import {FaPython,FaReact, FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum, FaLinux, FaCode} from "react-icons/fa";


class Hero extends Component {
    render() {
        return (
            <section class="hero-section" id ='hero'>
            <div class='floating-icons'>
                <div class='floating-icon-container'>
                    <FaMonero class='floating-icon'/>
                </div>
                <div class='floating-icon-container'>
                    <FaEthereum class='floating-icon'/>
                </div>
                <div class='floating-icon-container'>
                    <FaBtc class='floating-icon'/>
                </div>
            </div>


            <div class="hero-header">
                <div class = "special-text">Hi, my name is</div> 
                <div class="title">
                    <span class="block"></span>
                    <h1>Harold Than<span></span></h1>
                </div>

                <div class="wordCarousel">
                    <span class="block"></span>
                    <div>
                        <ul class="flip4">
                            <li>Web 3.0 Developer</li>
                            <li>Digital Artist</li>
                            <li>Junior Pentester</li>
                            <li>VR Developer</li>
                        </ul>
                    </div>
                </div>     
                <div class="hero-buttons">
                    <div class="resume-box">
                        <p>My Resume</p>
                    </div>
                    <div class="contact-box">
                        <p>Contact Me</p>
                    </div>
                </div>
              

            </div>

        </section>
        )
    }
}

export default Hero;

