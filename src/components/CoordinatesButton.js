import React, { Component } from 'react';
 
export default class CoordinatesButton extends Component {

	constructor(props) {
		super(props)
	}

	handleClick = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render() {
	    return (
	      	<button onClick={this.handleClick}>Coordinates Button</button>
	    )
	}

}