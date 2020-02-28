import React from 'react';
import './index.css';
//import 'font-awesome/css/font-awesome.min.css';



class Tile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() { 
		const {text} = this.props
		const {icons} = this.props
		return (
				<div className="__Tile_block">
					<div>
						<div className="__Tile_icon">{icons}</div>
						<div className="__Tile_title">{text}</div>
					</div>
				</div>
		)
	}
}

export default Tile;
