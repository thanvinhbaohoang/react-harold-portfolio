import React, { Component } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import {FaCode} from "react-icons/fa";



class Experience extends Component {
    constructor(props){
        super(props); //Allow to call 'this.function'
        this.experienceArray = {
            "1":{employer:'Dartmouth College', description:'text1'},
            "2":{employer:'DALI Lab', description:'text2'},
            "3":{employer:'Cable MakerSpace', description:'text3'},
            "4":{employer:'Thayer Machine Shop', description:'text4'},
            "5":{employer:'Secret LAB', description:'text5'},
        }
    }

    renderExperienceTabs() {
        return(
            <Tabs defaultActiveKey="1" tabPosition="left">
                {Object.entries(this.experienceArray).map(([id, experience]) => (
                    <TabPane tab={experience.employer} key={id}>
                        {experience.description}
                    </TabPane>
                ))},
            </Tabs>
        )
    }

    render() {
        return (
       
<section class='experience-section'>
            <div class='section-title'> Where I Have Worked At</div>
            <div class='work-history-container'>
                <div class='window-top-bar'>
                    <div class  ='window-buttons'> 
                        <div class='window-button'></div>
                        <div class='window-button'></div>
                        <div class='window-button'></div>
                    </div>
                    <div class = 'window-title'>Work History</div>
                    <div class ='code-logo'><FaCode/></div>
                </div>

      
                    {this.renderExperienceTabs()}
                    
            </div>
                  
                    <div class='skills-tiles'>

                    </div>
        </section>
        )
    }
}

export default Experience;





