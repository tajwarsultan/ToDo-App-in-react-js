import React, { useState } from "react";


export default function TodosFun() {
    const [state, setState] = useState({
        todos: [{ title: "shams", id: false }, { title: "shams", id: false }, { title: "shams", id: false }],
        value: ''
    })
    const handelChange = (e) => {
        console.log(value)

        setState({
            ...state,
            value: e.target.value,
        });
    }
    // console.log(value)

    const AddTodo = (event) => {

        event.preventDefault();

        if (value) {
            let obj = { title: state.value }
            setState({
                todos: [...state.todos, obj],
                value: ""
            });
        }

        // state.todos.push(state.value)
        // setState({
        //     ...state,
        //     value: ''
        // })
    }
    const DelTodo = (index) => {
        state.todos.splice(index, 1)
        setState({
            todos: state.todos
        })
    }
    const edit = (index) => {
        state.todos[index].id = true;
        setState({
            todos: state.todos
        })
    }
    const Change = (e, index) => {
        state.todos[index].title = e.target.value;
        setState({
            todos: state.todos
        })
    }
    const update = (index) => {
        state.todos[index].id = false;
        setState({
            todos: state.todos
        })
    }
    let { todos, value } = state;
    return (
        <React.Fragment>
            <div className="TodoApp">
                <div className="tododiv">
                    <form action="">
                        <h1>Todo App in Functional Component</h1>

                        <input
                        className="Input2"
                            type="text"
                            placeholder="enter  Here ..."
                            value={value}
                            onChange={(e) => handelChange(e)}
                        />
                        <button onClick={(e) => AddTodo(e)}>Add me</button>
                    </form>
                    <ul>
                        {
                            todos.map((v, i) => {
                                return <li key={i}>
                                    {v.id ? <input className="inputtodo" value={v.title} onChange={(e) => Change(e, i)} type="tex" /> : v.title}
                                    {v.id ? (
                                        <button className="update" onClick={() => update(i)}>update</button>) :
                                        <button onClick={() => edit(i, v.title)}>edit</button>
                                    }
                                    <button onClick={(index) => DelTodo(index)}>Del</button>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}