import React from 'react'



export default class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {value:"Chantalle"};
  }
  
    
  onchangeHandler = (e) => {
    this.setState({value: e.target.value})
  }
  

    render() {
      return( 
      <div>
      <h1>Hello, Class {this.state.value}</h1>
      <input type="text" onChange={this.onchangeHandler}/>
      </div>
      );
    }
  }
  