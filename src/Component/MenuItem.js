
import React, { Component } from 'react'


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
