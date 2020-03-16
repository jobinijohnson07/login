import React, { Component } from 'react';
import Nav from '../navbar';

class About extends Component {
     state = {}
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
				  <h1>About</h1>
       </div>
    );
  }
}
 
export default About;

// export default class About extends React.Component {
//   onNavigateHome = () => {};

//   render() {
//     return (
//       <div>
//         <h3>The About Page</h3>
//         <p>About Id: </p>
//         <button onClick={this.onNavigateHome} className="btn btn-primary">
//           Go Home!
//         </button>
//       </div>
//     );
//   }
// }
