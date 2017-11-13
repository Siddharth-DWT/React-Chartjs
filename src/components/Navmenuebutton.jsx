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
        this.props.selected = item;
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

