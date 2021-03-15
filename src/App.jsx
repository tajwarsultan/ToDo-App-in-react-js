import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Todo from "./Todos/todo";
// import Home from './components/Home';
// import About from "./components/About";
// import Contect from './components/Contect';
// import New from "./components/New";
// import Old from './components/Old'
// import FunC from "./components/Hooks/FunC.jsx";
// import Class from "./components/Hooks/Class";
// import Hooks from "./components/Hooks/Hooks.jsx";
// import Hooks1 from './components/Hooks/Hooks1';

import './App.css';
import TodosFun from "./components/Todos/TodosFun";
// import Parent from "./components/Props/Parent";
// import State from "./components/LifeCycle/state";
import Todo from './components/Todos/todo'


// todo list in class component

export default class App extends Component {
  render() {
    return (
      <div>
        <Todo/>
        {/* <Parent/> */}
        <TodosFun/>

      </div>
    )
  }
}



// // This is Input Method for State management

// class App extends Component{
//   GetProps(){
//     document.write('here is ....? ')
//   }
//   render(){
//     return(
//       <div>
//           <h1 GetProps={()=>this.props.GetProps()}> Here is my App </h1>
//           <State/>
//       </div>
//     )
//   }
// }
// export default App;


// counter of state management

// class App extends Component{
//   render(){
//     return(
//       <div>
//           <FunC name="Counter in Fun Component"/>
//           <hr></hr>
//           <Class name="Counter in Class Component"/>
//           <hr></hr>
//           <Hooks/>
//           <Hooks1/>
//       </div>
//     )
//   }
// }
// export default App;


// props in function component

// function App() {
//   return (
//     <div className="App">
//       <Home name="tajwar" 
//         <h1>i am here men?</h1>
//       />
//       <About name="shams"/>
//       <Contect name="yasir"/>
//     </div>
//   );
// }

// export default App;


// props & Child Props in class component

// class App extends Component {
//   render() {
//     return (
//       <div className="portfolio">
//         <About class="Trump">
//           <p>I am fullstack web developer and also expert in other machine languages</p>
//           <h1>Experties</h1>
//           <ul>
//             <li>HTML 5</li>
//             <li>CSS3</li>
//             <li>Bootstrap</li>
//             <li>JavaScript</li>
//             <li>React Js</li>
//           </ul>
//           <Home>
//             <ul>
//               <li>
//                 BSCs
//                 </li>
//               <li>ICS</li>
//               <li>Matric</li>
//             </ul>
//           </Home>
//           <Contect >
//             <ul>
//               <li>
//                 Adress: Noor Colony Jutial Gilgit
//                   </li>
//               <li>
//                 Phone: 03344332309
//                   </li>
//             </ul>
//           </Contect>
//           <New />
//           <Old />
//         </About>
//       </div>
//     )
//   }
// }
// export default App;