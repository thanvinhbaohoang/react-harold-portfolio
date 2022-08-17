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
import NameForm from './components/BTCPayButton';
function App() {

  return (
    <div className="App">
    
{/*             
            <form method="POST" action="https://mainnet.demo.btcpayserver.org/api/v1/invoices" class="btcpay-form btcpay-form--block">
                <input type="hidden" name="storeId" value="HKDtrHpP7SGhHCMBLWiEZy5JMruBZhSUCB1NPQqe4uJK" />
                <input type="hidden" name="currency" value="USD" />
                <input type="image" class="submit" name="submit" src="https://mainnet.demo.btcpayserver.org/img/paybutton/pay.svg" style="width:209px" alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"/>
            </form> */}

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
