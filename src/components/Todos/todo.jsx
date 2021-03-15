import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [{ title: "shams", id: false }, { title: "shams", id: false }, { title: "shams", id: false }],
            value: ''
        }
    }
    
    AddTodo = (event) => {
        // this.state.todos.push(this.state.value) this is frist methoad
            let obj = { title: this.state.value }
            this.setState({
                todos: [...this.state.todos, obj],
                value: "",
            })
        event.preventDefault();
    }
    Delete = (index) => {
        this.state.todos.splice(index, 1)
        this.setState({
            todos: this.state.todos
        })
    }
    // edit =(index,val)=> {
    //     const a= prompt("edit todos");
    //     this.state.todos[index]= a
    //     this.setState({
    //         todos: this.state.todos
    //     })
    // }
    edit = (index) => {
        this.state.todos[index].id = true;
        this.setState({
            todos: this.state.todos
        })
    }
    Change = (e, index) => {
        this.state.todos[index].title = e.target.value;
        this.setState({
            todos: this.state.todos
        })
    }
    update = (index) => {
        this.state.todos[index].id = false;
        this.setState({
            todos: this.state.todos
        })
    }

    render() {
        let { todos, value } = this.state;
        return (
            <React.Fragment>
                <div className="TodoApp">
                    <div className="tododiv">
                        <form action="">
                            <h1>todo app in Class Component</h1>
                            <input className="Input1" value={value} onChange={(e) => this.setState({ value: e.target.value })} placeholder="enter todos" />
                            <button className="addtodo" onClick={(e) => this.AddTodo(e)}>Add</button>
                        </form>
                        <ul>
                            {todos.map((v, i) => {
                                return (
                                    <li key={i}>
                                        {v.id ? <input className="inputtodo" value={v.title} onChange={(e) => this.Change(e, i)} type="tex" /> : v.title}
                                        {v.id ? (
                                            <button className="update" onClick={() => this.update(i)}>update</button>) :
                                            <button onClick={() => this.edit(i, v.title)}>edit</button>
                                        }
                                        <button onClick={() => this.Delete(i)}>del</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
