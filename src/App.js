/* eslint-disable jsx-a11y/alt-text */
// import logo from './logo.svg';
import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube} from "react-icons/fa";
import './App.css';
import harold from './images/harold.jpg';
import doge from './images/doge.webp';
import web3 from './images/web3.webp';
import virtual from './images/virtual.webp';
import cyber from './images/cyber.webp';


function App() {
  return (
    <div className="App">
        <div class='social-media-strip'>
            <div class='social-media-icons'>
                <FaInstagram class='social-media-icon'/>
                <FaLinkedinIn class='social-media-icon'/>
                <FaGithub class='social-media-icon'/>
                <FaYoutube class='social-media-icon'/>
            </div>

        </div>

        <div class='nav-bar'>
            <div class='nav-items'>
                <a href ='#hero'>
                    <p class='nav-item'> Home </p>
                </a>
                <a href ='#about'>
                    <p class='nav-item'> About </p>
                </a>
                <a href ='#works'>
                    <p class='nav-item'> Works </p>
                </a>
                <a href ='#contact'>
                    <p class='nav-item'> Contact </p>
                </a>
              
            </div>

        </div>


        <div class="hero-section" id ='hero'>
            <div class="hero-header">
                <p class = "special-text">Hi, my name is</p> 

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
                <div class="resume-box">
                    <p>My Resume</p>
                </div>

            </div>

        </div>



        {/* <!-- About Me Section--> */}
        <div class = "about-section" id="about">
            <h1 class='section-title'>About Me</h1>

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

                            <div class = "tile">
                                <p> AR/VR</p>
                                <img class= 'tile-image' src={virtual} width='100%'/>
                            </div>

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


        
        </div>

        <div class = "works-section" id="works">
            <h1 class='section-title'> My Works</h1>

            <div class='main-works'></div>
            <div class='other-works'></div>
        </div>

        <div class ="contact-section" id="contact">
            <div class ="contact-left">
                <div class = "contact-title">
                    <h1>Contact Me</h1>
                    <p>I love creative and freelance work.</p>
                </div>
                <div class = "contact-boxes">
                    <div class ="name-and-email">
                        <input type="text" placeholder="Name" class = "contact-name"/>
                        <input type="text" placeholder="Email"  class = "contact-email"/>
                    </div>
                    
                    <input type="text" placeholder="Subject" class = "contact-subject"/>

                    <textarea placeholder="Message" class= "contact-message"></textarea>
                </div>


                <div class = "submit-box">
                    <input type="submit" class="contact-submit" value="Message Me!"/>
                </div>

            </div>


            <div class = "contact-right">
                <div class = "contact-card">
                    <div class = "image-container">
                    </div>
                    <h3> Harold Than </h3>
                    <div class ="info">
                        <p> Email: thanvinhbaohoang@gmail.com</p>
                        <p> Phone: (857)-308-9745</p>
                        <p> Location: Boston, MA</p>
                    </div>
                        
                </div>
            
            </div>
            
        </div>
            
    </div>
  );
}

export default App;
