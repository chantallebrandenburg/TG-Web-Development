import React, { useState, } from'react'

    

export default function FunctionalComponent() {

  const [name, setName] = useState("Chantalle")
    
  const onchangeHandler2 = (e) => {
    setName(e.target.value)

  }

  return(
  <div>
  <h1>Hello, Functional {name}</h1>
  <input type="text" onChange={onchangeHandler2}/>
  </div>
  )}
