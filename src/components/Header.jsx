import React from 'react';
import Carousel from "./Carousel";
import Navbar from "./Navbar";



export default class Header extends React.Component{
    constructor(props){
        super(props);


    }
    render() {


        return (
            <div>
                <Navbar/>
                <Carousel/>
            </div>
        );
    }


}