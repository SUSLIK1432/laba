import React from 'react';
import Page from '../components/Navigator/Page'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'

import { ReactComponent as CalendarCheckSolid } from '../image/calendar-check-solid.svg'


class Second extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	


	render() { 
		const { id } = this.props	
		return (	
			<Page id={id}>
				<Header
					text1="Приемы" 
					icons={ <CalendarCheckSolid className="__Header_icon"/> }
					text2="Иванов Иван Иванович" 
					logout={ <Button text="Выйти"/> }
					
				/>
			</Page>
		)
	}
}

export default Second;
