import React, {useState} from 'react'

export default function Hooks() {
    const [Name, setName] = useState({fristName: '', lastName: ''})
    return (
        <div>
            <input  value={Name.fristName} onChange={e => setName({...Name, fristName: e.target.value})} />
            <input  value={Name.lastName} onChange={e => setName({...Name, lastName: e.target.value})} />
            <h2>Your frist naem is {Name.fristName}</h2>
            <h2>Your lastName is {Name.lastName}</h2>
        </div>
    )
}
