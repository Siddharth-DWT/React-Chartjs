import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import WebApp from '../Component/Main'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'


const TestRouting = () => (
    <Router>
        <div>
            <Route exact path ="/" component ={WebApp}/>
            <Route path ="/About" component ={About}/>
            <Route path ="/Services" component ={Services}/>
            <Route path ="/Contact" component ={Contact}/>
        </div>
    </Router>
)
export default TestRouting
