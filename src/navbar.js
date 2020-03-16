import React, { Component } from 'react';
import "./navbar.css";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <header>
                    <nav class="fill">
                        <ul>
                          <img src="/images/logo.png" alt="logo" className="img"></img>
                            <li>
                                <button name="profile"onClick={name => this.props.OnNav(name)}>
                                    Profile
                                </button>
                            </li>
                            <li>
                                <button name="home" onClick={name => this.props.OnNav(name)}>
                                   Home
                                </button>
                            </li>
                            <li>
                                <button name="about" onClick={name => this.props.OnNav(name)}>
                                    About
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
         );
    }
}
 
export default Navbar;