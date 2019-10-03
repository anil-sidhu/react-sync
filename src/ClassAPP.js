import React, { Component,useState }  from 'react'
import Test from './components/functions'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'peter',
      password: ''
    }

  }

  submit() {
    // 
  //  console.warn( test(10,10))
 

  }


  render() {

    return  <div>

    <input type="text" value={this.state.password} 
    // onChange={(e)=>{this.setState({name:e.target.value})}} 
    name="name" />
    <Test />
    <input type="text"  onChange={(e)=>{this.setState({password:e.target.value})}} name="password" />
    <button onClick={() => { this.submit() }} >Submit</button>
   
  </div> 
  }

}