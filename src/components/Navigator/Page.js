import React from 'react';


class Page extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() { 
		const { children } = this.props
		
		return (	
			<div>{ children }</div>
		)
	}
}

export default Page;
