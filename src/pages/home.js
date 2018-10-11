

import React, { Component } from "react";

class Home extends React.Component {
	state = {
	    todos: [
	      "Buy tea",
	      "Buy boba",
	      "Boil water",
	      "Add boba",
	      "Drain water",
	      "Add tea"
	    ],
	};
  render() {
  	
    return ( 
    <div>    
        <h2>Home</h2>
        <h2>How to make boba</h2>
        {this.state.todos.map(todo => (
          <li key={todo}>
            {todo + " "}
          </li>
        ))}
        {console.log(this.props.location.state)}
     </div>);
  }
}

export default Home;

//if you this.props.location.state exists, update the value in todods

//in your about page, in state pass the new phrase typed in teh text box