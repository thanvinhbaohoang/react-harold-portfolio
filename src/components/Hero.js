import React, { Component } from "react";
import {FaPython,FaReact, FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum, FaLinux, FaCode} from "react-icons/fa";

class Hero extends Component {
    constructor(props){
        super(props);
        this.wallet = []
    }
    
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
                        <a href="https://docs.google.com/document/d/1Fkyb2Ff_FmCr2UrZyMWW2BZU0ToPFl-a8TIZf5e6QtM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <div class="resume-box">
                                <p>My Resume</p>
                            </div>
                        </a>                    
                    <a href="mailto:haroldthan@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div class="contact-box">
                            <p>Contact Me</p>
                        </div>
                    </a>

                </div>
              

            </div>

        </section>
        )
    }
}

export default Hero;

