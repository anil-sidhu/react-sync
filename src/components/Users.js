import React, { Component } from 'react';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            // users: undefined
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/users').then((resp) => {
            resp.json().then((respData) => {
                console.warn("respdata", respData)
                this.setState({ data: respData })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Users Component</h1>
                {
                   this.state.data ?
                   this.state.data.map((data) =>
                   <div>{data.name}</div>
               )
               :null
                }
            </div>
        );
    }
}

export default Users;