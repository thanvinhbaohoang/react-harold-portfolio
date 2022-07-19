/* eslint-disable jsx-a11y/alt-text */
// import logo from './logo.svg';
import {FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaMonero, FaBitcoin, FaEthereum, FaLinux, FaCode} from "react-icons/fa";
import './App.css';
import harold from './images/harold.jpg';
import doge from './images/doge.webp';
import web3 from './images/web3.webp';
import virtual from './images/virtual.webp';
import cyber from './images/cyber.webp';
import pic from '/home/harold/Desktop/react-harold-portfolio/src/images/charlie-henson-no-logo-abst-468.jpg'

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


        <section class="hero-section" id ='hero'>
            <div class='floating-icons'>
                <div class='floating-icon-container'>
                    <FaInstagram class='floating-icon'/>
                </div>
                <div class='floating-icon-container'>
                    <FaLinkedinIn class='floating-icon'/>
                </div>
                <div class='floating-icon-container'>
                    <FaGithub class='floating-icon'/>
                </div>
                <div class='floating-icon-container'>
                    <FaYoutube class='floating-icon'/>
                </div>
                {/* <div class='floating-icon-container'>
                    <FaMonero class='floating-icon'/>
                </div>
                <div class='floating-icon-container'>
                    <FaBitcoin class='floating-icon'/>
                </div>
                <div class='floating-icon-container'>
                    <FaLinux class='floating-icon'/>
                </div> */}
            </div>


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
                <div class="hero-buttons">
                    <div class="resume-box">
                        <p>My Resume</p>
                    </div>
                    <div class="contact-box">
                        <p>Contact Me</p>
                    </div>
                </div>
              

            </div>

        </section>



        {/* <!-- About Me Section--> */}
        <section class = "about-section" id="about">
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
        </section>

        {/*========= EXPERIENCE SECTION ==========*/}
        <section class='experience-section'>
                    <h1 class='section-title'> Where I Have Worked At</h1>
                    <div class='work-history'>
                        <div class='work-names'>
                            <li> Dartmouth College</li>
                            <li> Thayer Machine Shop</li>
                            <li> Cable's Makerspace</li>
                            <li> Secret Network</li>

                        </div>
                        <div class='work-infos'>
                            <div class='job-title'> Engineer @ Dartmouth College</div>
                            <div class='job-period'> May 2018 - Present</div>
                            <div class='job-description'> 
                                <li>VP at Dartmouth Libertarians</li>
                                <li>VP at Kappa Pi Kappa</li>
                                <li>TA at MakerSpace</li>
                                <li>TA at Machineshop</li>
                            </div>
                        </div>
                    </div>

                    <div class='skills-tiles'>

                    </div>
                </section>

        {/* ============= PROJECTS SECTION ========== */}
        <section class = "projects-section" id="works">
            <h1 class='section-title'> Take a look at my projects</h1>
            <h2>Featured Projects</h2>
            
            <div class='featured-projects'>
                

                <div class='featured-project-container'>
                    <div class='featured-project-img-container'>
                        <img class= 'featured-project-img' src={pic} width='100%'/>
                    </div>
                    <div class='featured-project-infos'>
                        <div class='featured-project-tags'>
                            Blockchain
                        </div>
                        <div class='featured-project-title'>
                            Project Super Duper
                        </div>
                        <div class='featured-project-description-container'>
                            <div class='featured-project-description'>
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.                        </div>
                    
                            </div>
                        <div class='featured-project-buttons'>
                            <div><FaCode/> Code </div>
                            <div><FaArrowAltCircleUp/>Site</div>
                        </div>
                </div>
                
                </div>

                <div class='featured-project-container'>
                    <div class='featured-project-img-container'>
                        <img class= 'featured-project-img' src={pic} width='100%'/>
                    </div>
                    <div class='featured-project-infos'>
                        <div class='featured-project-tags'>
                            Blockchain
                        </div>
                        <div class='featured-project-title'>
                            Project Super Duper
                        </div>
                        <div class='featured-project-description-container'>
                            <div class='featured-project-description'>
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.                        </div>
                    
                            </div>
                        <div class='featured-project-buttons'>
                            <div><FaCode/> Code </div>
                            <div><FaArrowAltCircleUp/>Site</div>
                        </div>
                </div>
                
                </div>
              
            </div>

            <h2>Other Projects</h2>
            <div class='small-projects'>
                <div class = 'small-project-container'>
                    <div class='small-project-img-container'>
                        <img class= 'small-project-img' src={pic} width='100%'/>
                    </div>
                    <div class='smalll-project-infos'> 
                        <div class='small-project-title'>My Project #1</div>
                        <div class='small-project-description'>
                            blabla random stuffs to describe this project and stuffs. i love my jobs lol lmao, some long desc right here.
                        </div>
                    </div>
                    <div class='small-project-buttons'>
                        <div class='site-button'>Site</div>
                        <div class='code-button'>Code</div>
                    </div>
                </div>

                <div class = 'small-project-container'>
                    <div class='small-project-img-container'>
                        <img class= 'small-project-img' src={pic} width='100%'/>
                    </div>
                    <div class='smalll-project-infos'> 
                        <div class='small-project-title'>My Project #1</div>
                        <div class='small-project-description'>
                            blabla random stuffs to describe this project and stuffs. i love my jobs lol lmao, some long desc right here.
                        </div>
                    </div>
                    <div class='small-project-buttons'>
                        <div class='site-button'>Site</div>
                        <div class='code-button'>Code</div>
                    </div>
                </div>

                <div class = 'small-project-container'>
                    <div class='small-project-img-container'>
                        <img class= 'small-project-img' src={pic} width='100%'/>
                    </div>
                    <div class='smalll-project-infos'> 
                        <div class='small-project-title'>My Project #1</div>
                        <div class='small-project-description'>
                            blabla random stuffs to describe this project and stuffs. i love my jobs lol lmao, some long desc right here.
                        </div>
                    </div>
                    <div class='small-project-buttons'>
                        <div class='site-button'>Site</div>
                        <div class='code-button'>Code</div>
                    </div>
                </div>
              
               
            </div>
        </section>

       
        {/* ============ CONTACT ============= */}
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
