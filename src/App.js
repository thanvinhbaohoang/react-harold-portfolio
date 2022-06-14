/* eslint-disable jsx-a11y/alt-text */
// import logo from './logo.svg';
import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube} from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="App">
      

        <div class='social-media-strip'>
            <div class='social-media-icons'>
                <FaInstagram class='social-media-icon'/>
                <FaLinkedinIn class='social-media-icon'/>
                <FaGithub class='social-media-icon'/>
                <FaYoutube class='social-media-icon'/>
                <div class= 'social-media-line'></div>
            </div>

        </div>

        <div class="hero-section">
            <div class="hero-header">
                <p>Hi, my name is</p> 

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
                
                {/* <div class="sign-up-box">My Resume</div> */}

            </div>

        </div>

        {/* <!-- Home Section--> */}
        {/* <div class ="home">
            <div class="home-left">
                <div class = "home-header-container">

                    <h1> Welcome To My Portfolio</h1>
                </div>
            
                <div class = "cta">

                    <div class ="description">
                        <p> <b>Harold Than</b> is my name and I love random stuffs. If you want a brief overview of my past experience, you can view it here instead of
                        going through the entire site.</p>
                    </div>
                </div>
        
                <button type="button" class="sign-up-box">My Resume</button>

            </div>
            
            </div> */}


        {/* <!-- About Me Section--> */}
        <h1 class='title-section'>About Me</h1>
        <div class = "about-section" id="about">
            <div class = "image-container"></div>


            <div class = "about-right">
                <div class ="tiles" >
                        <div class = "tile">
                        </div>

                        <div class = "tile">
                        </div>

                        <div class = "tile">
                        </div>

                        <div class = "tile">
                        </div>
                </div>
                
                <p> Hello, my name is Harold Than and I am a <b>Computer Student</b> at <b>Dartmouth College</b>. I am an avid reader of Austrian Economics and Libertarian Philosophy.
                    This ideological background reflects through my technical interests and thus, I am passionate about decentralized and Open-Source technology.
                </p>

                

            </div>


        </div>

        <h1 class='title-section'>My Works</h1>
        <div class = "works-section" id="works">
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
