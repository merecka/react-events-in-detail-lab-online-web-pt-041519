import React, { Component } from 'react';
 
export default class CoordinatesButton extends Component {

	constructor(props) {
		super(props)
		this.state = { onReceiveCoordinates: this.props.onReceiveCoordinates }
	}

	handleClick = (event) => {
		this.setState({ onReceiveCoordinates: [event.clientX, event.clientY]})
	}

	render() {
	    return (
	      	<button onClick={this.handleClick}>Coordinates Button</button>
	    )
	}

}