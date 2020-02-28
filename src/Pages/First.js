import React from 'react';
import Page from '../components/Navigator/Page'

class First extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() { 
		const { id, navigator } = this.props	
		return (	
			<Page id={id}>
				<div onClick={() => { navigator.goPage("second") }}>go</div>
			</Page>
		)
	}
}

export default First;
