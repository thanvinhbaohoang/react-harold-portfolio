import React, { Component } from "react";
import {FaPython,FaReact, FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBtc, FaEthereum, FaLinux, FaCode, FaSitemap} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {DiUnitySmall,DiBootstrap,DiTerminal, DiReact,DiGithubBadge, DiJsBadge, DiLinux ,DiMongodb, DiPhotoshop,DiPython, DiJavascript} from "react-icons/di";

var featuredProjects = ({
    "1":{
        imageURL: "https://blog.voltage.cloud/content/images/2021/02/1500x500.jpeg",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Blockchain",
        title: "BTCPayServer",
        description: "Running my own Server with BTCPay and getting local Hanover Shops to start accepting Bitcoin (in place of VISA and Square)"
    },
    "2":{
        imageURL: "https://github.com/thanvinhbaohoang/project-dartmart/blob/main/dartmart.png?raw=true",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "React Native App",
        title: "DartMart",
        description: "A Dartmouth College specific food delivery app with DUO 2-FA Authentication"
    },
    "3":{
        imageURL: "https://github.com/thanvinhbaohoang/spectre-wallet/raw/main/readme_imgs/wallets.png",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Blockchain",
        title: "Spectre Wallet",
        description: "A Crypto Wallet Web-App and React-Native-App Designed and Implemented using Bitcore-lib"
    },
});

var otherProjects = ({
    "0":{
        imageURL: " ",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Web 3.0",
        title: "EtherGram",
        description: "A simple instagram clone using Web 3.0 Framework and Smart Contracts (Solidity)."
    },
    "1":{
        imageURL: "https://github.com/thanvinhbaohoang/react-native-youtube/blob/main/youtubeclone.png?raw=true",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Web App",
        title: "Youtube Clone",
        description: "Youtube Clone using React Native and YoutubeAPI"
    },
    "4":{
        imageURL: "https://github.com/thanvinhbaohoang/Is-She-Into-You/blob/main/IsSheIntoYou.png?raw=true",
        githubURL: "https://github.com",
        renderURL: "https://is-she-into-you.onrender.com/",
        tags: "Web App",
        title: "Is She Into You?",
        description: "Pure CSS and HTML Card 'Game' Based On SimplyExplained's Youtube Video of the same name"
    },
    "5":{
        imageURL: "https://github.com/thanvinhbaohoang/images-for-portfolio/blob/main/boid.png?raw=true",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "AR/VR",
        title: "Boids Deep Sea Simulation",
        description: "A Deep Sea VR Cage Diving Experience with Schools Of Fish behavior simulated with Boids Algorithm"
    },
    "6":{
        imageURL: "https://github.com/thanvinhbaohoang/images-for-portfolio/blob/main/advrtise.png?raw=true",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "AR/VR",
        title: "Ad-VR-Tise",
        description: "3D Consensual Advertisement Model with Interactive UI for the mostly unexplored VR Metaverse ads space"
    },
    "7":{
        imageURL: "https://github.com/thanvinhbaohoang/images-for-portfolio/blob/main/guitar-hero.png?raw=true",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "AR/VR",
        title: "GuitAR Hero",
        description: "Learn to play real guitar through a Guitar Hero Game using Augmented Reality"
    },
    "8":{
        imageURL: "https://github.com/thanvinhbaohoang/images-for-portfolio/blob/main/spooderman.png?raw=true",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Unity3D",
        title: "SpooderMan",
        description: "Swing Around the city skyline and beat up bean-people ('oof') as Spooderman."
    },
    "9":{
        imageURL: " ",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Software",
        title: "Web Search Engine",
        description: "Web Search Engine programmed in C with use of Crawler, Indexer and Querier"
    },
    "10":{
        imageURL: " ",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "NLP",
        title: "Ivy Sentiment",
        description: "Data Analysis through Web-Scraping Reddit and Twitter to get the general sentiments of each Ivy League College Online"
    },
    "11":{
        imageURL: " ",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Software",
        title: "Sudoku In C",
        description: "A Sudoku Game Generator and Solver Program written in C"
    },
    "12":{
        imageURL: " ",
        githubURL: "https://github.com",
        renderURL: "https://render.com",
        tags: "Software",
        title: "Viterbi POS Tagger",
        description: "Hidden Markov Model for tagging part of speech in texts."
    }
    
});

class Projects extends Component {
    constructor(props){
        super(props);

        this.projectArrays = ({
            "1":{
                imageURL: " ",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "Blockchain",
                title: "Super Spectre Wallet",
                description: "Bla bla bla wallet for the coolest asd asd asd asd fasd fasdf asdf asdfawsd fasdf asd fasdfasa sdpeople only lol"
            },
            "2":{
                imageURL: " ",
                githubURL: "https://github.com",
                renderURL: "https://render.com",
                tags: "AR/VR",
                title: "Super VR Headset",
                description: "Bla bla bla VR Headset for tad sada asdfasd fasdfsdafasdf asdf asdf asdf asdf asdfsd asd asd he coolest people only lol"
            },
            "3":{
                imageURL: " ",
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



