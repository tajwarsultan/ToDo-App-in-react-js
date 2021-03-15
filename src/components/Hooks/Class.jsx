import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props)

        this.state = {
             count: 0
        }
    }
    changeCount(){
        this.setState({
            count: this.state.count +1
        })
    }
    decrement(){
        this.setState({
            count: this.state.count -1
        })
    }
    reset(){
        this.setState({
            count: this.state.count 
        })
    }
    incrementFive(){
        for (let i = 0; i < 5; i++) {
            this.setState({
                count: this.state.count +5
            })
        }
    }
    count(){
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>Count {this.state.count}</h1>
                <button onClick={()=> this.count()}>Click Me</button>
                <button onClick={()=> this.changeCount()}>Count</button>
                <button onClick={()=> this.decrement()}>Decrement</button>
                <button onClick={()=> this.incrementFive()}>clic me</button>
                
            </div>
        )
    }
}
