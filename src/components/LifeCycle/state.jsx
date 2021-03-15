import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : "tajwar",
            email : "tajuu.sultan00@gmail.com",
            value: ""

        }
        // this.ClickMe =this.ClickMe.bind(this)
    }
    ClickMe(){
        // alert("here is ",this.state.name),
        console.log("Hey Look There ", this.state.name)
        this.setState({
            name: ""
        })
    }
    setName=()=>{
        this.setState({
            name: this.state.value
        })
    }
    HndleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={()=> this.setState()}>Click me</button>
                <h1>My Name Is {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>
                
                <input name="name" onChange={(e)=> this.HndleChange(e)} type="text" placeholder="enter value" id="val" />
                <input name="email" onChange={(e)=> this.HndleChange(e)} type="text" placeholder="enter value" id="val" />

                <button onClick={()=> this.ClickMe()}>Click me</button>
                <button onClick={()=> this.setName()}>Set Name</button>            
            </div>
        )
    }
}
