import React, { Component } from "react";
import {FaPython,FaReact, FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum, FaLinux, FaCode, FaSitemap} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {DiUnitySmall,DiBootstrap,DiTerminal, DiReact,DiGithubBadge, DiJsBadge, DiLinux ,DiMongodb, DiPhotoshop,DiPython, DiJavascript} from "react-icons/di";

class Projects extends Component {
    constructor(props){
        super(props);
        this.projectArrays = ({
            "1":{
                imageURL: "URL1",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "Blockchain",
                title: "Super Spectre Wallet",
                description: "Bla bla bla wallet for the coolest people only lol"
            },
            "2":{
                imageURL: "URL1",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "AR/VR",
                title: "Super VR Headset",
                description: "Bla bla bla VR Headset for the coolest people only lol"
            },
            "3":{
                imageURL: "URL3",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "AR/VR",
                title: "Super VR Headset",
                description: "Bla bla bla VR Headset for the coolest people only lol"
            }
        });
    };

    renderFeaturedProjects() {
        return(
            <div class='featured-projects'>
                {Object.entries(this.projectArrays).map(([id, project]) => (
                    <div class='featured-project-container'>
                    <div class='featured-project-img-container'>
                    <img class= 'featured-project-img' width='100%' src={project.imageURL} alt=''/>
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
                            < a href={project.githubURL} class='featured-project-button' target="_blank" rel="noopener noreferrer">
                                <div><FaGithub/></div> 
                                <div>Code</div>
                            </a>

                            < a href={project.renderURL} class='featured-project-button' target="_blank" rel="noopener noreferrer">
                                <div><FaSitemap/></div> 
                                <div> Site</div>
                            </a> 

                        </div>
                    </div>
                </div>
                ))}
           </div>
        )
    }

    renderOtherProjects() {
        return(
            <div class='small-projects'>
                {Object.entries(this.projectArrays).map(([id, project]) => (
                    <div class = 'small-project-container'>
                        <div class='small-project-img-container'>
                            <img class= 'small-project-img' width='100%' src={project.imageURL}/>
                        </div>
                        <div class='smalll-project-infos'> 
                            <div class='small-project-title'>{project.title}</div>
                            <div class='small-project-description'>
                                {project.description}
                            </div>
                        </div>
                        <div class='featured-project-buttons'>
                            < a href={project.githubURL} class='featured-project-button' target="_blank" rel="noopener noreferrer">
                                <div><FaGithub/></div> 
                                <div>Code</div>
                            </a>

                            < a href={project.renderURL} class='featured-project-button' target="_blank" rel="noopener noreferrer">
                                <div><FaSitemap/></div> 
                                <div> Site</div>
                            </a> 

                        </div>
                    </div>
                ))}
           </div>
        )
    }


    render() {
        return (
       
<section class = "projects-section" id="works">
            <div class='section-title'> Take a look at my projects</div>
            {this.renderFeaturedProjects()}
          

            <h2>Other Projects</h2>
            {this.renderOtherProjects()}

        </section>
        )
    }
}

export default Projects;



