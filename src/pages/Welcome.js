import React, { Component } from 'react';
import Nav from '../navbar';

class welcome extends Component {
    state = {  }
    nav = (event) => {
        if (event.target.name === 'profile') {
            this.props.history.push('/welcome');
         }else if (event.target.name === 'home') {
            this.props.history.push('/home') 
         }else if (event.target.name === 'about') {
             this.props.history.push('/about')
         }
    }
    render() { 
        return ( 
            <div>
                 <Nav OnNav={this.nav} />
                 <h1>Welcome</h1>
            </div>
         );
    }
}

export default welcome;