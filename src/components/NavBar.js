import React, { Component } from "react";
import BTCPayButton from "./BTCPayButton";


class NavBar extends Component {
    render() {
        return (
            <div class='nav-bar'>
            <a class='nav-logo' href='#hero'>
                <h1>HAROLD THAN</h1>
            </a>

            <div class='nav-items'>
                <a href ='#about'>
                    <p class='nav-item'> About </p>
                </a>
                <a href ='#experience'>
                    <p class='nav-item'> Experience </p>
                </a>
                <a href ='#works'>
                    <p class='nav-item'> Projects </p>
                </a>
                <a href ='#contact'>
                    <p class='nav-item'> Contact </p>
                </a>
            </div>

            <BTCPayButton/>

        </div>
        )
    }
}

export default NavBar;
