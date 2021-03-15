import React, { Component } from 'react'
import Child from "./child";

export default class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todo: ['mushtaq', 'mushtaqi'],
             value: ''
        }
    }
    addtodo=()=>{
        // this.state.todo.push(this.state.value)
        this.setState({
            todo: [...this.state.name, this.state.value],
            value:''
        })
    }
    // deltodo=(index)=>{
    //     this.state.todo.splice(this.state.value)
    // }
    render() {
        const{todo, value} = this.state
        return (
            <div>
                <div className="parent">
                    <h1>My Parent file</h1>
                    <Child clickMe="ClickMe" name="Premio" details="black and white v8 engine high speed and smart" price="2M" />
                    <Child name="Washing Machine" details="You can wash easily your cloths you can also set time to wash clothes " price="4.k" />
                    <Child name="I Phone pro" details="nice phone easy to use and many features" price="45M" />
                    <Child name="Cooler" details="its cool and user friendly" price="50.5K" />
                </div>
                <div className="todo">
                    <input value={value} type="text" placeholder="enter todos" onChange={(e)=> this.setState({value: e.target.value})} />
                    <button onClick={this.addtodo}>Add Todo</button>

                    <ul>
                        {todo.map((v, i) => {
                            return <li key={i}>{v}
                                <button onClick={this.deltodo(i)}>del</button>
                            </li>
                        })}
                    </ul>   
                </div>
            </div>
        )
    }
}
