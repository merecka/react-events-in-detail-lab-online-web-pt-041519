import React, { Component } from 'react';
 
export default class DelayedButton extends Component {

	constructor(props) {
		super(props)
		this.state = { onDelayedClick: this.props.onDelayedClick, 
			delay: this.props.delay
		}
	}

	handleClick = (event) => { 
		setTimeout(this.setState({onDelayedClick: event}), this.props.delay)
	}

	render() {
	    return (
	      	<button onClick={this.handleClick}>Delay Button</button>
	    )
	}


}
