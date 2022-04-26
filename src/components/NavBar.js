import React from 'react'

export class NavBar extends React.Component {
    onHoverOver(e){
        e.target.style.background='Gainsboro';
    }

    onHoverOut(e){
        e.target.style.background= null;
    }

    render() {
        return (
            <div className="ui four item menu">
                <a className="item" onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut}>Record</a>
                <a className="item" onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut}>Report</a>
                <a className="item" onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut}>Diary</a>
                <a className="item" onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut}>Profile</a>
            </div>
        )
    }
}

export default NavBar