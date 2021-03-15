import React, { Component } from 'react'

export default class Child extends Component {
    
    render() {
        return (
            <div className="props">
                <h5>This is me child</h5>
                <h4>{this.props.name}</h4>
                <p>{this.props.details}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }
}
