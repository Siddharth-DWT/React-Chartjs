import React from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';

const NavdropDownitem = (props) =>

            <div className="dropdown-menu dropdown-menu-right show" aria-labelledby="navbarDropdownPortfolio">
                <Link className="dropdown-item" to="portfolio-1-col.html">{props.alldataObject.title}</Link>
                <Link className="dropdown-item" to="portfolio-2-col.html">{props.alldataObject.otherLinks[0].title}</Link>
                <Link className="dropdown-item" to="portfolio-3-col.html">{props.alldataObject.otherLinks[1].title}</Link>
                <Link className="dropdown-item" to="portfolio-4-col.html">{props.alldataObject.otherLinks[2].title}</Link>
                <Link className="dropdown-item" to="portfolio-item.html">{props.alldataObject.otherLinks[3].title}</Link>
        </div>


export default NavdropDownitem;
