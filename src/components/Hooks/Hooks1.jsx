import React, {useState} from 'react'

export default function Hooks1() {
    const [items, setitems] = useState([])
    const AddItem = ()=>{
        setitems([...items,{
            value: 'nmae',
            value: 'iam here' 
        }])
    }
    const restMe = () => {
        
        setitems([...items, {
            value: ''
        }])
    }
    return (
        <div>
            <button onClick={AddItem}>click me</button>
            <button onClick={(e)=>restMe()}>rest</button>
            <ul>
                {
                    items.map(items => (
                        <li key={items.index}>{items.value}</li>
                    ))
                }
            </ul>        
        </div>
    )
}
