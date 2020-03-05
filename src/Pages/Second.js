import React from 'react';
import Moment from 'react-moment';
//import React, { Component } from 'react';
import Page from '../components/Navigator/Page'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import Table from '../components/Table/Table'

import { appointments as data } from '../lib/MockData'
import { ReactComponent as CalendarCheckSolid } from '../image/calendar-check-solid.svg'

export default class Second extends React.Component {

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

				<div className='Second'>
				<Table 
                   data={data}
                   columns={[
                   {
                	dataField: 'date',
                	text: 'Дата',
                                 
                 formatter: (v, row) => {
                  return (
                     <Moment date={v} format='DD.MM.YYYY HH.mm'/>
                   )
                 }
               },
               {
                 dataField: 'clientName',
                 text: 'Клиент'
               },
               {
                 dataField: 'status',
                 text: 'Статус'
               },
               {
                 dataField: 'holderName',
                 text: 'Принимающий'
               },
               {
                 dataField: 'compliences',
                 text: 'Жалобы'
               },
               {
                 dataField: 'diagnosis',
                 text: 'Диагноз'
               }     
             ]}
           />
        	</div>
			</Page>
			
		)
	}
}


//export default Appointments;
