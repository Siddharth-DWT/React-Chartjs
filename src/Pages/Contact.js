import React, { Component } from 'react'
import {Navbar}  from '../Component/NavBar'
import Footer from '../Component/Footer'

export default class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>You have clicked on Contact  page</h1>
                <Footer/>
            </div>
        );
    }
}