import React, { Component } from "react";

class About extends React.Component {
	state = {
		todos: ["New todo to add: "],
	    newTodo: "",
	    edits: []
  	};

  	handleChange = todo => event => {
    let updatedEdits = this.state.edits;
    updatedEdits[this.state.todos.indexOf(todo)] = event.target.value;
    this.setState({
      edits: updatedEdits
    });
  };

   handleSubmit = event => {
    event.preventDefault();
    const index = this.state.todos.indexOf(event.target.value);
    let newValue = this.state.edits[index]
    let updatedEdits = this.state.edits;
    updatedEdits[index] = "";
    this.setState({
      edits: updatedEdits,
      newTodo: newValue
    });

    this.props.history.push({
    	pathname:"/",
    	state: {hi:"hi"}
    })

  };


  render() {
    return (
      <div>
        <h2>About</h2>
        {this.state.todos.map(todo => (
          <li key={todo}>
            {todo + " "}
            <input type="text" value={this.state.edits[0]}onChange={this.handleChange(todo)} />
            <button value={todo} onClick={this.handleSubmit}>
              Update
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default About;
