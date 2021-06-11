import React, { Component } from 'react'
import "./Square.css"

export class Square extends Component {
    render() {
        return (
            <div>
                <img src={this.props.images} alt={this.props.name} />
                <br />
               <span> {this.props.name}</span>
            </div>
        )
    }
}

export default Square

