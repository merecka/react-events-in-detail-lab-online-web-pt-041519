import React, { Component } from 'react';
 
export default class DelayedButton extends Component {

	constructor(props) {
		super(props)
	}

	handleClick = (event) => {
		event.persist()
		// We have to wrap the onDelayClick into an anonymous function otherwise JS will 
		// execute the file immediately when the file loads and it will not be a function
		// when the button click event is executed.
		setTimeout(() => (this.props.onDelayedClick(event)), this.props.delay)
	}

	render() {
	    return (
	      	<button onClick={this.handleClick}>Delay Button</button>
	    )
	}

}
