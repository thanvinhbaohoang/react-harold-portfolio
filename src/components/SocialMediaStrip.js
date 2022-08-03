import React, { Component } from "react";
import {FaInstagram, FaLinkedinIn, FaGithub, FaYoutube} from "react-icons/fa";


class SocialMediaStrip extends Component {
    render() {
        return (
        
<div class='social-media-strip'>
            <div class='nav-icons'>
                <div class='nav-icon-container'>
                    <FaInstagram class='nav-icon'/>
                </div>
                <div class='nav-icon-container'>
                    <FaLinkedinIn class='nav-icon'/>
                </div>
                <div class='nav-icon-container'>
                    <FaGithub class='nav-icon'/>
                </div>
                <div class='nav-icon-container'>
                    <FaYoutube class='nav-icon'/>
                </div>
            </div>
        </div>
        )
    }
}

export default SocialMediaStrip;

