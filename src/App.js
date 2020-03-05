import React from 'react';
//import Tile from './components/Tile/Tile'
import Stack from './components/Navigator/Stack'



import First from './Pages/First'
import Second from './Pages/Second'
//import Icons from './image/clipboard-list-solid.svg'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() {
		return (
			<Stack activePage="first">
				<First id="first"/>
				<Second id="second"/>
			</Stack>
		)
	}
}

export default App;
