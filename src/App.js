import React from 'react';
import Tile from './components/Tile/Tile'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() {
		return (
			<div>
				<Tile text="текст какой-то"/>
				<Tile text="текст другой"/>
			</div>
		)
	}
}

export default App;
