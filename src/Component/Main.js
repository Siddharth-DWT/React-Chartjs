import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Navbar}  from './NavBar'
import {ReadBlock} from './Reusable'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'


export default class WebApp extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <div class="container">
                    <h1 class="my-4">Welcome to Modern Business</h1>
                    <div class="row">
                        <ReadBlock
                            title = "First"
                            text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
                        />
                        <ReadBlock
                            title = "Second"
                            text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
                        />
                        <ReadBlock
                            title = "Third"
                            text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
                        />
                        <ReadBlock
                            title = "Fourth"
                            text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
                        />
                        <ReadBlock
                            title = "Fifth"
                            text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

/*
class MenuBar extends  Component{
    render(){
        return(
            <div>
            <div>
                <Link to="/About"><Button value = "About"/></Link>
                <Link to="/Services"><Button value = "Services"/></Link>
                <Link to="/Contact"><Button value = "Contact"/></Link>
            </div>
            <Block heading = "First" text = "this is first block text"/>
            </div>

                )
    }

}*/
