import React, { Component } from 'react'
import {Navbar}  from '../Component/NavBar'
import Footer from '../Component/Footer'
export default class About extends Component{
    render(){
        var footercss ={

            bottom: 0
        }
        return(
            <div>
                <Navbar/>
                <div>
               <h1>You have clicked on About  page</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}