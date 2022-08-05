import React, { Component } from "react";


class Contact extends Component {
    render() {
        return (
        <div class ="contact-section" id="contact">
            <div class='section-title'> Contact Me</div>
            <h1>Get In Touch</h1>
            
            <a href="mailto:haroldthan@gmail.com" target="_blank" rel="noopener noreferrer">
                <p>haroldthan@gmail.com</p>
            </a>

            <p class='contact-description'>I am looking for opportunities to work in Web 3.0 and Crypto Development. Whether you have a project or just want to say hi, I am more than happy to connect ;) </p>
            <a href="mailto:haroldthan@gmail.com" target="_blank" rel="noopener noreferrer">
                <div class='nav-connect-button'> Say Hello :)</div>
            </a>

        </div>
        )
    }
}

export default Contact;