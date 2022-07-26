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

        <div class='nav-bar'>
            <div class='nav-logo'>
                <h1>HAROLD THAN</h1>
            </div>

            <div class='nav-items'>
                <a href ='#about'>
                    <p class='nav-item'> About </p>
                </a>
                <a href ='#works'>
                    <p class='nav-item'> Experience </p>
                </a>
                <a href ='#works'>
                    <p class='nav-item'> Projects </p>
                </a>
                <a href ='#contact'>
                    <p class='nav-item'> Contact </p>
                </a>
            </div>

         
            <div class='nav-connect-button'>
                <p> Let's Connect</p>
            </div>
        </div>


        <section class="hero-section" id ='hero'>
            <div class='floating-icons'>
                {/* <div class='floating-icon-container'>
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
                </div> */}
            </div>


            <div class="hero-header">
                
                <div class = "special-text">Hi, my name is</div> 
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
            <div class='section-title'>About Me</div>

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
                    <div class='section-title'> Where I Have Worked At</div>
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
            <div class='section-title'> Take a look at my projects</div>
            
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
                        <div><FaCode/> </div>
                        <div><FaArrowAltCircleUp/></div>
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
                        <div><FaCode/> </div>
                        <div><FaArrowAltCircleUp/></div>
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
                        <div><FaCode/> </div>
                        <div><FaArrowAltCircleUp/></div>
                    </div>
                </div>
               
            </div>
        </section>

       
        {/* ============ CONTACT ============= */}
        <div class ="contact-section" id="contact">
         <div class='section-title'> Contact Me</div>
         <h1>Get In Touch</h1>
         <p class='contact-description'>I am looking for opportunities to work in Web 3.0 and Crypto Development. Whether you have a project or just want to say hi, I am more than happy to connect ;) </p>
         <div class='nav-connect-button'> Say Hello</div>
        </div>

        <footer>
            <p>Designed and Built by Harold Than</p>
            <p> Might have taken some inspiration and assets from Ethereum.org</p>
        </footer>
    </div>
  );
}

export default App;
