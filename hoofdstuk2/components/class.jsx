import React from 'react'

export default class ClassComponent extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    name: "Chantalle"
  }
  }

    render() {
      return <h1>Hello, Class {this.props.name}</h1>;
    }
  }