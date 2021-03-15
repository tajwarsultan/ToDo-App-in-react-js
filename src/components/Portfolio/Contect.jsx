import React from 'react'

// export default function Contect(props) {
//     return (
//         <div>
//             <h1>here is my {props.name}</h1>
//         </div>
//     )
// }

const Contect = props => {
    return (
      <div>
          <h1>Contect</h1>
          {props.children}
      </div>
    )
  }
export default  Contect;