var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Main = React.createClass({

    getInitialState: function() {
        return { open: _initialState };
    },

    close: function(id) {
        var open = this.state.open;
        open[id] = false;
        this.setState({ open: open });
    },

    toggle: function(id) {
        var open = this.state.open;
        open[id] = !open[id];
        this.setState({ open: open });
    },

    getToggle: function(text, onClick, isOpen) {
        return (
            <div className={'tab' + (isOpen ? ' active' : '')}>
                <button type="button" onClick={onClick}>{text}</button>
            </div>
        );
    },

    click: function(id) {
        alert('You have clicked something!');
        this.close(id);
    },

    render: function() {
        return (
            <main>

                {_examples.map(function(example, i) {
                    return (
                        <DropdownMenu isOpen={this.state.open[i]} forceCloseFunction={this.close.bind(this, i)}
                                      toggle={this.getToggle(example.text, this.toggle.bind(this, i), this.state.open[i])} direction={example.direction} key={'example' + i} className={example.className}>
                            <ul>
                                <DropdownMenuItem component="a" action={this.click.bind(null, i)} childrenProps={{href: "#"}}>Example 1</DropdownMenuItem>
                                <DropdownMenuItem action={this.click.bind(this, i)}>Example 2</DropdownMenuItem>
                                <DropdownMenuItem action={this.click.bind(this, i)}>Lorem ipsum pretend</DropdownMenuItem>
                                <li className="separator" role="separator" />
                                <DropdownMenuItem action={this.click.bind(this, i)}>Example 3</DropdownMenuItem>
                            </ul>
                        </DropdownMenu>
                    );
                }.bind(this))}
            </main>
        );
    }
});

var DropdownMenu = React.createClass({
    propTypes: {
        isOpen: React.PropTypes.bool.isRequired,
        forceCloseFunction: React.PropTypes.func.isRequired,
        toggle: React.PropTypes.node.isRequired,
        direction: React.PropTypes.oneOf(['center', 'right', 'left']),
        className: React.PropTypes.string,
        component: React.PropTypes.oneOf(['div', 'span', 'li'])
    },

    getDefaultProps: function() {
        return {
            direction: 'center',
            className: '',
            component: 'div'
        };
    },

    /* Only have the click events enabled when the menu is open */
    componentDidUpdate: function(prevProps, prevState) {
        if(this.props.isOpen && !prevProps.isOpen) {
            window.addEventListener('click', this.handleClickOutside);
        } else if(!this.props.isOpen && prevProps.isOpen) {
            window.removeEventListener('click', this.handleClickOutside);
        }
    },

    /* If clicked element is not in the dropdown menu children, close menu */
    handleClickOutside: function(e) {
        var children = this.getDOMNode().getElementsByTagName('*');
        for(var x in children) {
            if(children[x] == e.target) { return; }
        }

        this.props.forceCloseFunction(e);
    },

    handleKeyDown: function(e) {
        var key = e.which || e.keyCode;
        if(key !== 9) { // tab
            return;
        }

        var items = this.getDOMNode().querySelectorAll('button,a');
        var id = e.shiftKey ? 1 : items.length - 1;
        if(e.target == items[id]) {
            this.props.forceCloseFunction(e);
        }
    },


    render: function() {
        var items = this.props.isOpen ? this.props.children : null;

        return (
            <div className={'dd-menu' + (this.props.className ? ' ' + this.props.className : '')}>
                {this.props.toggle}
                <CSSTransitionGroup transitionName={'grow-from-' + this.props.direction} component="div"
                                    className="dd-menu-items" onKeyDown={this.handleKeyDown}>
                    {items}
                </CSSTransitionGroup>
            </div>
        );
    }
});

var DropdownMenuItem = React.createClass({
    propTypes: {
        action: React.PropTypes.func.isRequired,
        childrenProps: React.PropTypes.object,
        tabIndex: React.PropTypes.number,
        component: React.PropTypes.oneOf(['button', 'a']),
        className: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            tabIndex: 0,
            component: 'button',
            className: '',
            childrenProps: {}
        };
    },

    handleKeyDown: function(e) {
        var key = e.which || e.keyCode;
        if(key === 32) { // spacebar
            e.preventDefault(); // prevent page scrolling
            this.props.action();
        }
    },

    render: function() {
        var children = React.createElement(this.props.component, this.props.childrenProps, this.props.children);
        return (
            <li className={this.props.className} onClick={this.props.action}>
                {children}
            </li>
        );
    }
});

React.render(<Main />, document.getElementById('main'));

import React from 'react';


export default class DropdownMenue extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            listVisible: false,
            display: ""
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    select(item) {
        /*this.props.selected = item;*/
        console.log("item clicked");
    }

    show() {
        this.setState({ listVisible: true });
        //document.addEventListener("click", this.hide.bind(this));
        console.log("button clickd menue bar show");

    }

    hide() {

        this.setState({ listVisible: false });
        //document.removeEventListener("click", this.show.bind(this));
        console.log("button clickd menue bar Hide");
        document.getElementById("panel").getAttribute(this);
    }

    render() {
        return (

            <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>

                <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show.bind(this)}>
                    <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <div className="dropdown-list">
                    <div id={"panel"}>

                        {this.renderListItems()}
                    </div>
                </div>
            </div>);
    }

    renderListItems() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(<div onClick={this.select.bind(this)}>
                <span style={{ color: item.hex }}>{item.name}</span>
                <i className="fa fa-check"></i>
            </div>);
        }
        return items;
    }
}

