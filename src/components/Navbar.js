import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

import Navbutton from "./Navbutton";

import NavdropDownitem from "./NavdropDownItem";
import About from "./About";
import Header from "./Header";
import Services from './Services';
import App from "../App";

export default class Navbar extends React.Component {
    constructor(){
        super();

        this.state = {
            navMenue:
                [
                    {
                        id: 0,
                        title: "Portfolio",
                        otherLinks: [
                            {
                                title: "Full Width Page",
                                link: "/full-width.html"
                            },
                            {
                                title: "Full Width Page",
                                link: "/full-width.html"
                            },
                            {
                                title: "Full Width Page",
                                link: "/full-width.html"
                            },
                            {
                                title: "Full Width Page",
                                link: "/full-width.html"
                            }

                        ]
                    },
                    {
                        id: 1,
                        title: "Blog",
                        otherLinks: [
                            {
                                title: "Blog Home 1",
                                link: "/full-width.html"
                            },
                            {
                                title: "Blog Home 2",
                                link: "/full-width.html"
                            },
                            {
                                title: "Blog Home 3",
                                link: "/full-width.html"
                            },
                            {
                                title: "Pricing Table",
                                link: "/full-width.html"
                            }

                        ]
                    },
                    {
                        id: 2,
                        title: "Others",
                        otherLinks: [
                            {
                                title: "Full Width Pag",
                                link: "/full-width.html"
                            },
                            {
                                title: "Sidebar Page",
                                link: "/full-width.html"
                            },
                            {
                                title: "FAQ",
                                link: "/full-width.html"
                            },
                            {
                                title: "Pricing Table",
                                link: "/full-width.html"
                            }

                        ]
                    }

                ],
                activePortfolio : false ,
            activeBlog : false ,
            activeOther:false

        };

        /*this.linking=this.linking.bind(this);*/
    }

    linking(value){
        /*const {id} = event.target;*/
        debugger;
        console.log("button clicked",value);
        let currentValue = this.state.activePortfolio
        if(value == 1){
            this.setState({
                activePortfolio : !currentValue,
                activeBlog: false,
                activeOther: false
            });
        }
        else if(value == 2){
            this.setState((prevState, props) => ({

                activePortfolio : false,
                activeBlog: !(prevState.activeBlog),
                activeOther: false
            }));        }
        else{
            this.setState((prevState, props) => ({

                activePortfolio : false,
                activeBlog: false,
                activeOther: !(prevState.activeOther)
            }));
        }



       // return "/index";
    }



    render() {



        return (
            <Router>
          <div>
              <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                  <div className="container">
                      <Navbutton className="navbar-brand" gotolink={"/index"}  text={"Start Bootstrap"}/>

                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                  <Navbutton className="nav-link" gotolink={"/About"}  text={"About"}/>
                              </li>
                              <li className="nav-item">

                                  <Navbutton className="nav-link" gotolink={"/Services"}  text={"Services"}/>
                              </li>
                              <li className="nav-item">

                                  <Navbutton className="nav-link" gotolink={"/Contact"}  text={"Contact"}/>
                               </li>
                               <li className="nav-item dropdown">
                                  <NavLink onClick={(e) => {this.linking(1)}} value ="portfolio" className="nav-link dropdown-toggle" to="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Portfolio
                                  </NavLink>

                                  { this.state.activePortfolio  ?  <NavdropDownitem  alldataObject = {this.state.navMenue[0]}/> : null }
                              </li>
                              <li className="nav-item dropdown">

                                  <NavLink onClick={(e) => {this.linking(2)}} value ="blog" className="nav-link dropdown-toggle" to="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Blog
                                  </NavLink>
                                  { this.state.activeBlog  ?  <NavdropDownitem  alldataObject = {this.state.navMenue[1]}/>  : null }
                              </li>
                              <li className="nav-item dropdown">
                                  <NavLink onClick={(e) => {this.linking(3)}} className="nav-link dropdown-toggle" to="/#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Other Pages
                                  </NavLink>

                                  { this.state.activeOther  ?  <NavdropDownitem  alldataObject = {this.state.navMenue[2]}/>  : null }

                              </li>
                        {/*
                              <Route  path="/" component={About}/>
                              <Route  path="/About" component={About}/>
                              <Route  path="/Services" component={Services}/>*/}


                          </ul>
                      </div>
                  </div>


              </nav>



          </div>
            </Router>
        );
    }
}





