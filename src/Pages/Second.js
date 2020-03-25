import React from 'react';
import Moment from 'react-moment';
//import React, { Component } from 'react';
import {Form} from 'reactstrap'
import Page from '../components/Navigator/Page'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import Table from '../components/Table/Table'
import TextField from '../components/TextField/TextField'
import DateField from '../components/DateField/DateField'
import CheckboxField from '../components/CheckboxField/CheckboxField'
import SelectFild from '../components/SelectFild/SelectFild'
import SelectHolderName from '../components/SelectHolderName/SelectHolderName'
import SelectCompliences from '../components/SelectCompliences/SelectCompliences'
import {filter} from 'underscore'
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { appointments as data } from '../lib/MockData'
import { ReactComponent as CalendarCheckSolid } from '../image/calendar-check-solid.svg'


const USER = 'Иванов Иван Иванович'
export default class Second extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			filter: {
				status: 'all',
		        startDate: null,
		        endDate: null,
		        clientName: '',
		        onlyMe: false,
		        holderName: '',
                compliences:'all',
      		}
		};
	}

  
    onChangeFilterField = (name, value) => {
      const { filter } = this.state
  
      this.setState({
        filter: {...filter, ...{[name]: value}}
      })
    }
  
    onChangeFilterDateField = (name, value) => {
      const { filter } = this.state
  
      this.setState({
        filter: {...filter, ...{[name]: value && value.getTime()}}
      })
    }
  
    onChangeFilterSelectFild = (e) => {
    	const { filter } = this.state
    	this.setState({
    		filter: {
    			...filter,
    			status:e.currentTarget.value
    		}
    	})
    }

    

    onChangeFilterSelectCompliences = (e) => {
        const { filter } = this.state
        this.setState({
            filter: {
                ...filter,
                compliences:e.currentTarget.value
            }
        })
    }
	

	render() {
		const { id } = this.props;
		const {
		status,
        startDate,
        endDate,
        clientName,
        onlyMe,
        holderName,
        compliences,
      } = this.state.filter
  
		let filtered = filter(data, (o) => {
			return (
				(startDate ? o.date >= startDate : true) && (endDate ? o.date <= endDate : true) &&
				(clientName ? (clientName.length > 2 ? o.clientName.includes(clientName) : true) : true) && 
				(onlyMe ? o.holderName === USER : true) &&
				(o.status.indexOf(status) !== -1 ||  status === 'all') &&
                (o.compliences.indexOf(compliences) !== -1 ||  compliences === 'all') &&
				(holderName ? (holderName.length > 2 ? o.holderName.includes(holderName) : true) : true)
			)
		})

		return (	
			<Page id={id}>
				<Header
					text1="Приемы" 
					icons={ <CalendarCheckSolid className="__Header_icon"/> }
					text2="Иванов Иван Иванович" 
					logout={ <Button text="Выйти"/> }	
				/>

			<div className='Appointments-Body'>
            <div className='Appointments-Filter'>
              <Form className='Appointments-FilterForm'>
                <DateField
                        hasTime
                        name='startDate'
                        value={startDate}
                        dateFormat='dd/MM/yyyy HH:mm'
                        timeFormat='HH:mm'
                        placeholder='С'
                        className='Appointments-FilterField'
                        onChange={this.onChangeFilterDateField}
                />
                <DateField
                        hasTime
                        name='endDate'
                        value={endDate}
                        dateFormat='dd/MM/yyyy HH:mm'
                        timeFormat='HH:mm'
                        placeholder='По'
                        className='Appointments-FilterField'
                        onChange={this.onChangeFilterDateField}
                />
                <TextField
                        name='clientName'
                        value={clientName}
                        placeholder='Клиент'
                        className='Appointments-FilterField'
                        onChange={this.onChangeFilterField}
                />
                <SelectFild
                		name='status'
                		data={data}
                		className='Appointments-FilterField'
                		onChange={this.onChangeFilterSelectFild}
                />

               <SelectHolderName
                        name='holderName'
                        value={holderName}
                        placeholder='Принимающий'
                        className='Appointments-FilterField'
                        onChange={this.onChangeFilterField}
                />

                <SelectCompliences
                        name='compliences'
                        data={data}
                        className='Appointments-FilterField'
                        onChange={this.onChangeFilterSelectCompliences}
                />

                <CheckboxField
                        name='onlyMe'
                        label='Только я'
                        value={onlyMe}
                        className='Appointments-FilterField'
                        onChange={this.onChangeFilterField}
                />
              </Form>
            </div>
            </div>

				<div className='Second'>
					<Table 
	                   data={filtered}
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
