import React, { useState, } from'react'
import FunctionalComponent from "./components/Function"
import ClassComponent  from './components/class'



export default function App() {
  const [name, setName] = useState("Chantalle")
    
    const onchangeHandler = (e) => {
        setName(e.target.value)
        console.log(name)
    }

  return (
    <div className="App">
      <input type="text" onChange={onchangeHandler}/>
      <FunctionalComponent name={name}/>
      <ClassComponent name={name}/>
    </div>
  );
}


