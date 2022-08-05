/* eslint-disable jsx-a11y/alt-text */
// import logo from './logo.svg';
import './App.scss';
import '../node_modules/rc-tabs/assets/index.css';  // This is for Experience Tabs Section for some reason
import NavBar from "./components/NavBar";
import SocialMediaStrip from './components/SocialMediaStrip';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from './components/Skills';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
function App() {

  return (
    <div className="App">
        <NavBar/>
        <SocialMediaStrip/>
        {/*========= HERO SECTION ==========*/}
        <Hero/>
        {/* <!-- About Me Section--> */}
        <About/>
        <Skills/>
        {/*========= EXPERIENCE SECTION ==========*/}
        <Experience/>
        {/* ============= PROJECTS SECTION ========== */}
        <Projects/>
        {/* ============ CONTACT ============= */}
        <Contact/>

        <footer>
            <p>Designed and Built by Harold Than</p>
            <p> Might have taken some inspiration and assets from Ethereum.org</p>
        </footer>
        
    </div>
  );
}

export default App;
