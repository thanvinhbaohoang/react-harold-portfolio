import React, { Component } from "react";
import BTCPayButton from "./BTCPayButton";


class NavBar extends Component {
    render() {
        return (
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

         
            {/* <div class='nav-connect-button'>
                <p> Coffee :) </p>
            </div> */}

            <BTCPayButton/>

        </div>
        )
    }
}

export default NavBar;
