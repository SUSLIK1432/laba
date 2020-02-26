import React from 'react';
import './index.css';

class Tile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() {
		const { text } = this.props
		return (
			<div>{text}</div>
		)
	}
}

export default Tile;
