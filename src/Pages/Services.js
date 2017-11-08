import React, { Component } from 'react'
import {Navbar}  from '../Component/NavBar'
import Footer from '../Component/Footer'

export default class Services extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>You have clicked on Services page</h1>
                <Footer/>
            </div>
        );
    }
}