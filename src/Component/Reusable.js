
import React, { Component } from 'react'

export  class  ReadBlock extends Component{
    render(){
        return(


                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <h4 class="card-header">{this.props.title}</h4>
                        <div class="card-body">
                            <p class="card-text">{this.props.text}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

        )
    }
}

export class DropDown extends Component {
    render(){
        return(<div>
                <li className={this.props.active ? 'nav-item dropdown show': 'nav-item dropdown'}>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Prop
                    </a>

                    <div className={this.props.active ? 'dropdown-menu dropdown-menu-right show': 'dropdown-menu dropdown-menu-right'}
                          aria-labelledby="navbarDropdownBlog">
                        <a class="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
                        <a class="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
                        <a class="dropdown-item" href="blog-post.html">Blog Post</a>
                    </div>
                </li>
            </div>
        )
    }
}
