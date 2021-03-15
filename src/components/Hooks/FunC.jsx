import React, {useState} from 'react'

export default function FunC(props) {
    const initialvalue = 0;
    const [count, setCount] = useState(initialvalue)
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(preCount => preCount + 1)
        }
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>count : {count}</h1>
            <button onClick={() => setCount(initialvalue)}>rest</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <button onClick={incrementFive}>increment +5</button>
        </div>
    )
}
