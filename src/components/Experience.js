import React, { Component } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import {FaCode} from "react-icons/fa";

class Experience extends Component {
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
                <Tabs defaultActiveKey="2" tabPosition="left">
            <TabPane tab="Dartmouth College" key="1">
            Lorem ipsum dolor sit amet, id duis noster delectus vis, at agam purto atqui usu. Eu eum sale choro. Ne quot equidem conclusionemque sed. Ludus referrentur ex quo. Fuisset disputando consequuntur ad nec, qui praesent postulant efficiendi ut.
            </TabPane>
            <TabPane tab="Secret Lab" key="2">
            Est vidit deseruisse in, mei ullum blandit maluisset ad. Ut sea iriure dolores. Vel tollit eirmod dolores ea, errem periculis usu ut. Eum alii soleat dissentiet ne. Ridens acsan an, ei eum solum pertinacia democritum.
            </TabPane>
            <TabPane tab="Dali Lab" key="3">
            Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
            </TabPane>
            <TabPane tab="Cable Makerspace" key="4">
            Est vidit deseruisse in, mei ullum blandit maluisset ad. Ut sea iriure dolores. Vel tollit eirmod dolores ea, errem periculis usu ut. Eum alii soleat dissentiet ne. Ridens acsan an, ei eum solum pertinacia democritum.
            </TabPane>
            <TabPane tab="Thayer Machine Shop" key="5">
            Est vidit deseruisse in, mei ullum blandit maluisset ad. Ut sea iriure dolores. Vel tollit eirmod dolores ea, errem periculis usu ut. Eum alii soleat dissentiet ne. Ridens acsan an, ei eum solum pertinacia democritum.
            </TabPane>
                </Tabs>
            </div>
                  
                    <div class='skills-tiles'>

                    </div>
        </section>
        )
    }
}

export default Experience;





