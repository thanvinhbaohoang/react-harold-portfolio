import React, { Component } from "react";
import {FaInstagram, FaLinkedinIn, FaGithub, FaYoutube} from "react-icons/fa";


class SocialMediaStrip extends Component {
    render() {
        return (
        
            <div class='social-media-strip'>
                <div class='nav-icons'>
                    <a class='nav-icon-container' href="https://www.instagram.com/haroldwithoutkumar/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram class='nav-icon'/>
                    </a>
                    <a class='nav-icon-container' href="https://www.linkedin.com/in/harold-t-08b773121/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn class='nav-icon'/>
                    </a>
                    <a class='nav-icon-container' href='https://github.com/thanvinhbaohoang' target="_blank" rel="noopener noreferrer">
                        <FaGithub class='nav-icon'/>
                    </a>
                    <a class='nav-icon-container' href='https://www.youtube.com/channel/UCzlnJ3x5xZjDXLWcIXJyfXw' target="_blank" rel="noopener noreferrer">
                        <FaYoutube class='nav-icon'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default SocialMediaStrip;

