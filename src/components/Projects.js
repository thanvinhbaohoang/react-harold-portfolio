import React, { Component } from "react";
import {FaPython,FaReact, FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum, FaLinux, FaCode, FaSitemap} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {DiUnitySmall,DiBootstrap,DiTerminal, DiReact,DiGithubBadge, DiJsBadge, DiLinux ,DiMongodb, DiPhotoshop,DiPython, DiJavascript} from "react-icons/di";

var featuredProjects = ({
    "1":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "WebDev",
        title: "Harold Than Portfolio",
        description: "A simple instagram clone using Web 3.0 Framework and Smart Contracts (Solidity)."
    },
    "2":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Blockchain",
        title: "Spectre Wallet",
        description: "Bla bla bla VR Headset for tad sada asdfasd fasdfsdafasdf asdf asdf asdf asdf asdfsd asd asd he coolest people only lol"
    },
    "3":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Blockchain",
        title: "BTCPayServer",
        description: "Bla bla bla VR Headset for tad sada asdfasd fasdfsdafasdf asdf asdf asdf asdf asdfsd asd asd he coolest people only lol"
    },
    "4":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "React Native App",
        title: "DartMart",
        description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
    }
});

var otherProjects = ({
    "0":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Web 3.0",
        title: "EtherGram",
        description: "A simple instagram clone using Web 3.0 Framework and Smart Contracts (Solidity)."
    },
    "1":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "WebDev",
        title: "Youtube Clone",
        description: "Bla bla bla wallet for the coolest asd asd asd asd fasd fasdf asdf asdfawsd fasdf asd fasdfasa sdpeople only lol"
    },
    "2":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "WebDev",
        title: "Online Notes",
        description: "Bla bla bla VR Headset for tad sada asdfasd fasdfsdafasdf asdf asdf asdf asdf asdfsd asd asd he coolest people only lol"
    },
    "4":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://is-she-into-you.onrender.com/",
        tags: "WebDev",
        title: "Is She Into You?",
        description: "Bla bla bla VR Headset for tad sada asdfasd fasdfsdafasdf asdf asdf asdf asdf asdfsd asd asd he coolest people only lol"
    },
    "5":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "WebDev",
        title: "Boids Deep Sea Simulation",
        description: "Bla bla bla VR Headset for tad sada asdfasd fasdfsdafasdf asdf asdf asdf asdf asdfsd asd asd he coolest people only lol"
    },
    "6":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "AR/VR",
        title: "Ad-VR-Tise",
        description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
    },
    "7":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "AR/VR",
        title: "GuitAR Hero",
        description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
    },
    "8":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "AR/VR",
        title: "SpooderMan",
        description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
    },
    "9":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Other",
        title: "Web Search Engine",
        description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
    },
    "10":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "NLP",
        title: "IvySentiment",
        description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
    },
    "11":{
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Software Design",
        title: "Sudoku In C",
        description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
    }
    
});

class Projects extends Component {
    constructor(props){
        super(props);

        this.projectArrays = ({
            "1":{
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "Blockchain",
                title: "Super Spectre Wallet",
                description: "Bla bla bla wallet for the coolest asd asd asd asd fasd fasdf asdf asdfawsd fasdf asd fasdfasa sdpeople only lol"
            },
            "2":{
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "AR/VR",
                title: "Super VR Headset",
                description: "Bla bla bla VR Headset for tad sada asdfasd fasdfsdafasdf asdf asdf asdf asdf asdfsd asd asd he coolest people only lol"
            },
            "3":{
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "AR/VR",
                title: "Super VR Headset",
                description: "Bla bla bla VR Headset for thasdsd fawedf asdf adsf asdf asdfasd fe coolest pas d asdads asd a sdasd  asd asdasd eople only lol"
            }
        });
    };

    renderFeaturedProjects() {
        return(
            <div class='featured-projects'>
                {Object.entries(featuredProjects).map(([id, project]) => (
                    <div class='featured-project-container'>
                        <div class='featured-project-img-container'>
                        <img class= 'featured-project-img' src={project.imageURL} alt=''/>
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
                {Object.entries(otherProjects).map(([id, project]) => (
                    <div class = 'small-project-container'>
                        <div class='small-project-img-container'>
                        <div class='small-project-tags'>
                                {project.tags}
                            </div>
                            <img class= 'small-project-img' src={project.imageURL}/>
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



