import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {DropDown} from './Reusable'

export class Navbar extends Component
{
    render(){
        var colours = [{
            name: "Red",
            hex: "#F21B1B"
        }, {
            name: "Blue",
            hex: "#1B66F2"
        }, {
            name: "Green",
            hex: "#07BA16"
        }];

        return(
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <Link class="navbar-brand" to="/">Start Bootstrap</Link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact</Link>
                            </li>
                            <DropDown list

                                          ={colours} name = "Prop"/>
                            <DropDown name = "Blog"/>
                            <DropDown name = "Other Pages"/>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
