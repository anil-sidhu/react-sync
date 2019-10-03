import React, { Component } from 'react';

class Form extends Component {
    constructor()
    {
        super()
        this.state={
            user:'',
            password:'',
        }
    }
    submit()
    {
        console.warn("function called",this.state)
    }
    render() {
        return (
            <div>
                <h1>Form </h1>
                <div> 
                    <input type="text" name="user"
                     onChange={(e)=>{this.setState({user:e.target.value})}}
                      />

                    <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}} />

                    <button onClick={()=>{this.submit()}} >Submit</button>

                </div>
            </div>
        );
    }
}

export default Form;