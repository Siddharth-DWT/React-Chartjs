
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
    constructor(props) {

        super(props);
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,

        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    renderListItems() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(<div onClick={this.select.bind(null, item)}>
                <span class="dropdown-item">{item.name}</span>
            </div>);
        }
        return items;
    }

    render(){
        return(<div>
                <li className={this.state.active ? 'nav-item dropdown show': 'nav-item dropdown'}>
                    <a  onClick={this.toggleClass} class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.name}
                    </a>

                    <div className={this.state.active ? 'dropdown-menu dropdown-menu-right show': 'dropdown-menu dropdown-menu-right'}
                          aria-labelledby="navbarDropdownBlog">
                       {/* <a class="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
                        <a class="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
                        <a class="dropdown-item" href="blog-post.html">Blog Post</a>*/}
                        {this.renderListItems.bind(this)}
                    </div>
                </li>
            </div>
        )
    }
}

