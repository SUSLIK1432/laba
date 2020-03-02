import React from 'react';
import './header.css';
//import 'font-awesome/css/font-awesome.min.css';



class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() { 
		const { text1, icons, text2, logout } = this.props
		return (
				<div className="__Header_mainBlock ">
					<div className="__Header_leftBlock">
						<div className="__Header_icon">{icons}</div>
						<div className="__Header_title">{text1}</div>	
					</div>
					<div className="__Header_rightBlock">
						<div className="__Header_title">{text2}</div>
						<div>{logout}</div>	
					</div>
				</div>
				
				
		)
	}
}

export default Header;
