import React, { Component } from "react";
import harold from '../images/harold.jpg';
import doge from '../images/doge.webp';
import web3 from '../images/web3.webp';
import virtual from '../images/virtual.webp';
import cyber from '../images/cyber.webp';
class About extends Component {
    render() {
        return (
            
            <section class = "about-section" id="about">
            <div class='section-title'>About Me</div>

            <div class = "about-content">
                <div class='image-and-description'>
                    <div class = "about-image-container">
                        <img class= 'about-image' src={harold} width='100%'/>
                    </div>
                    <div class = 'about-description-and-resume'>
                        <div class ="tiles" >
                            <div class = "tile">
                                <p> FOSSCAD</p>
                                <img class= 'tile-image' src={doge} width='100%'/>
                            </div>

                            <div class = "tile">
                                <p> Web 3.0</p>
                                <img class= 'tile-image' src={web3} width='100%'/>
                            </div>

                            <a class='tile' href="https://docs.google.com/presentation/d/1MDf6mNO4vXUD4PmzNfNRgtRQ_8hs7VX_psIm7ynzspU/edit#slide=id.g119da0e7613_1_25" target="_blank" rel="noopener noreferrer">
                                <p> AR/VR</p>
                                <img class= 'tile-image' src={virtual} width='100%'/>
                            </a>

                            <div class = "tile">
                                <p> Cybersecurity</p>
                                <img class= 'tile-image' src={cyber} width='100%'/>
                            </div>
                        </div>
                        <p class='about-description'> Hello, my name is Harold Than and I am a <b>Computer Student</b> at <b>Dartmouth College</b>. I am an avid reader of Austrian Economics and Libertarian Philosophy.
                            This ideological background reflects through my technical interests and thus, I am passionate about decentralized and Open-Source technology.
                        </p>
                        
                    </div>
                </div>
            </div>
           
        </section>
        )
    }
}

export default About;