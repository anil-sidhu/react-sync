import React, { Component } from 'react';

class About extends Component {
    render() {
        console.warn("props",this.props)
        return ( 
            <div>
               <h1>About Component</h1>
            </div>
        ); 
    }
}

export default About;