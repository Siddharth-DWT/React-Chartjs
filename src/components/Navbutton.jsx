import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbutton = (props) => <NavLink className={props.className} to={props.gotolink}  >{props.text}</NavLink>

export default Navbutton;