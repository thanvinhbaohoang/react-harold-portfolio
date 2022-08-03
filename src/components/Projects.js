import React, { Component } from "react";
import {FaPython,FaReact, FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum, FaLinux, FaCode} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {DiUnitySmall,DiBootstrap,DiTerminal, DiReact,DiGithubBadge, DiJsBadge, DiLinux ,DiMongodb, DiPhotoshop,DiPython, DiJavascript} from "react-icons/di";

class Projects extends Component {
    constructor(props){
        super(props);
        this.projectArrays = ({
            "1":{
                imageURL: "URL1",
                githubURL: "github.com",
                renderURL: "render.com",
                tags: "Blockchain",
                title: "Super Spectre Wallet",
                description: "Bla bla bla wallet for the coolest people only lol"
            },
            "2":{
                imageURL: "URL1",
                githubURL: "github.com",
                renderURL: "render.com",
                tags: "AR/VR",
                title: "Super VR Headset",
                description: "Bla bla bla VR Headset for the coolest people only lol"
            },
        });
    };

    renderFeaturedProjects() {
        return(
            <div class='featured-projects'>
                {Object.entries(this.projectArrays).map(([id, project]) => (
                    <div class='featured-project-container'>
                    <div class='featured-project-img-container'>
                    <img class= 'featured-project-img' width='100%'/>
                    </div>
                    <div class='featured-project-infos'>

                        <div class='featured-project-tags'>
                            {project.tags}
                        </div>

                        <div class='featured-project-title'>
                            {project.title}
                        </div>

                        <div class='featured-project-description-container'>
                            <div class='featured-project-description'>
                                {project.description}
                            </div>
                        </div>
                        
                        <div class='featured-project-buttons'>
                            <div><FaCode/> Code </div>
                            <div><FaArrowAltCircleUp/>Site</div>
                        </div>
                    </div>
                </div>
                ))},
           </div>
        )
    }



    render() {
        return (
       
<section class = "projects-section" id="works">
            <div class='section-title'> Take a look at my projects</div>
            {this.renderFeaturedProjects()}
          

            <h2>Other Projects</h2>
            <div class='small-projects'>
                <div class = 'small-project-container'>
                    <div class='small-project-img-container'>
                        <img class= 'small-project-img' width='100%'/>
                    </div>
                    <div class='smalll-project-infos'> 
                        <div class='small-project-title'>My Project #1</div>
                        <div class='small-project-description'>
                            blabla random stuffs to describe this project and stuffs. i love my jobs lol lmao, some long desc right here.
                        </div>
                    </div>
                    <div class='small-project-buttons'>
                        <div><FaCode/> </div>
                        <div><FaArrowAltCircleUp/></div>
                    </div>
                </div>
                <div class = 'small-project-container'>
                    <div class='small-project-img-container'>
                        <img class= 'small-project-img' width='100%'/>
                    </div>
                    <div class='smalll-project-infos'> 
                        <div class='small-project-title'>My Project #1</div>
                        <div class='small-project-description'>
                            blabla random stuffs to describe this project and stuffs. i love my jobs lol lmao, some long desc right here.
                        </div>
                    </div>
                    <div class='small-project-buttons'>
                        <div><FaCode/> </div>
                        <div><FaArrowAltCircleUp/></div>
                    </div>
                </div>
                <div class = 'small-project-container'>
                    <div class='small-project-img-container'>
                    <img class= 'small-project-img' width='100%'/>
                    </div>
                    <div class='smalll-project-infos'> 
                        <div class='small-project-title'>My Project #1</div>
                        <div class='small-project-description'>
                            blabla random stuffs to describe this project and stuffs. i love my jobs lol lmao, some long desc right here.
                        </div>
                    </div>
                    <div class='small-project-buttons'>
                        <div><FaCode/> </div>
                        <div><FaArrowAltCircleUp/></div>
                    </div>
                </div>
               
            </div>
        </section>
        )
    }
}

export default Projects;



