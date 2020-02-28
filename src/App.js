import React from 'react';
import Tile from './components/Tile/Tile'
//import Icons from './image/clipboard-list-solid.svg'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() {
		return (
			<div className="flex_center">
				<div className="__App_tile_collection">
					<Tile 
						text="Приемы" 
						icons="X"
					/>
					<Tile 
						text="События"
					/>
					<Tile 
						text="Оповещения"
					/>
					<Tile 
						text="Сообщения"
					/>
					<Tile 
						text="Клиенты"
					/>
					<Tile 
						text="Сотрудники"
					/>
				</div>
			</div>
		)
	}
}

export default App;
