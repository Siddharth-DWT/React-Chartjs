import React from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom'
import Carousel from "./Carousel";

export default class Footer extends  React.Component{
    render(){

    return(
        <div>
            <hr/>


                <div className="row mb-4">
                    <div className="col-md-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                    </div>
                    <div className="col-md-4">
                        <Link className="btn btn-lg btn-secondary btn-block" to="#">Call to Action</Link>
                    </div>
                </div>




            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
                </div>
            </footer>
        </div>
    );
    }

}