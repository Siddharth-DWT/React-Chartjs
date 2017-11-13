import React from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom'

const CardComponentstext = (props) => {

    {if( ! props.hasImage){


    return    <div className="col-lg-4 mb-4">
            <div className="card h-100">
                <h4 className="card-header">{props.CardTitle}</h4>
                <div className="card-body">
                    <p className="card-text">{props.CardDiscription}</p>
                </div>
                <div className="card-footer">
                    <a to="#" className="btn btn-primary">{props.buttonvalue}</a>
                </div>
            </div>
        </div>;
    }}




           return   <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                  <div className="card-body">
                      <h4 className="card-title">
                          <Link to="#">{props.CardTitle}</Link>
                      </h4>
                      <p className="card-text">props.CardDiscription</p>
                  </div>
              </div>
          </div>
       ;
    }

export default CardComponentstext;