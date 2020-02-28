import React from 'react';
import Page from '../components/Navigator/Page'

class Second extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() { 
		const { id } = this.props	
		return (	
			<Page id={id}>2</Page>
		)
	}
}

export default Second;
