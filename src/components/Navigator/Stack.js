import React from 'react';


class Stack extends React.Component {

	constructor(props) {
		super(props);
		const { activePage } = this.props
		this.state = {
			activePage:activePage
		};
	}

	goPage = (activePage) => {
		this.setState({
			activePage:activePage
		})
	}

	render() { 
		const { children } = this.props
		const { activePage } = this.state
		return (
				
			<div>
			{
				React.Children.map(children, (Child) => {
					const { props } = Child
					const { id } = props
					if (id === activePage) {
						return (
							React.cloneElement(Child, {
								...Child.props,
								navigator:{
									goPage:this.goPage
								}
							})
						)
					} else {
						return null
					}
				})
			}
						
			</div>
		)
	}
}

export default Stack;
