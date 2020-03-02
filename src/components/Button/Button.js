import React from 'react';
import './button.css';



class Button extends React.Component {


	render() { 
		const {text, onClick} = this.props
	
		return (
				<div className="__Button_main" onClick={onClick}>
					<div className="__Button_textBlock">{text}</div>
				</div>
		)
	}
}

export default Button;
