import React, { Component } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import {FaCode} from "react-icons/fa";



class Experience extends Component {
    constructor(props){
        super(props); //Allow to call 'this.function'
        this.experienceArray = {
            "1":{employer:'Dartmouth College', 
            jobTitle:'Student',
            timePeriod:'2018-2023',
            info:
            <div> Major: Computer Science 
                <br/>GPA: 3.36
                <br/>Tutor for Math 8 and Math 13 : Multivariable Calculus
                
            </div>
            },
            "2":{employer:'DALI Lab', 
            jobTitle:'Developer',
            timePeriod:'2018-2023',
            info:'Animator At DALI Lab'
            },
            "3":{employer:'Cable MakerSpace', 
            jobTitle:'Teaching Assistant',
            timePeriod:'April 2022-Present',
            info:<div>Teaching Assistant at Makerspace</div>
            },
            "4":{employer:'Dartmouth Libertarians', 
            jobTitle:'Vice President',
            timePeriod:'2018-Present',
            info: <div>Vice President of Dartmouth Libertarians 2022 <br/> Student For Liberty 2022's Group Of The Year
            </div>},
        }
    }

    renderExperienceTabs() {
        return(
            <Tabs defaultActiveKey="1" tabPosition="left">
                {Object.entries(this.experienceArray).map(([id, experience]) => (
                    <TabPane tab={experience.employer} key={id}>
                        <h3>{experience.jobTitle} <span class='highlight-text'>@{experience.employer}</span></h3> <br/>
                        <div class='secondary-text'>{experience.timePeriod}</div> <br/>
                        {experience.info}
                    </TabPane>
                ))},
            </Tabs>
        )
    }

    render() {
        return (
       
<section class='experience-section' id="experience">
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
                  
                 
        </section>
        )
    }
}

export default Experience;





