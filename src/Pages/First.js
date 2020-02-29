//import React, { Component } from 'react'
import React from 'react';
import Page from '../components/Navigator/Page'
import Tile from '../components/Tile/Tile'
import { ReactComponent as СalendarCheckSolid } from '../image/calendar-check-solid.svg'
import { ReactComponent as СommentDotsSolid } from '../image/comment-dots-solid.svg'
import { ReactComponent as StarSolid } from '../image/star-solid.svg'
import { ReactComponent as VolumeDownSolid } from '../image/volume-down-solid.svg'
import { ReactComponent as UsersSolid } from '../image/users-solid.svg'
import { ReactComponent as UserMdSolid } from '../image/user-md-solid.svg'

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
				<div className="flex_center">
					<div className="__App_tile_collection">
						<Tile 
							text="Приемы" 
							icons={ <СalendarCheckSolid className="allIcons"/> }
							onClick={() => { navigator.goPage("second") }}
						/>
						<Tile 
							text="События"
							icons={ <StarSolid className="allIcons"/> }
						/>
						<Tile 
							text="Оповещения"
							icons={ <VolumeDownSolid className="allIcons"/> }
						/>
						<Tile 
							text="Сообщения"
							icons={ <СommentDotsSolid className="allIcons"/> }
						/>
						<Tile 
							text="Клиенты"
							icons={ <UsersSolid className="allIcons"/> }
						/>
						<Tile 
							text="Сотрудники"
							icons={ <UserMdSolid className="allIcons"/> }
						/>
					</div>
				</div>
			</Page>
		)
	}
}

export default First;
