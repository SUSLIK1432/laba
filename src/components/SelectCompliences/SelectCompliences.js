import React from 'react';
import PropTypes from 'prop-types'
import {Label, Input, FormGroup} from 'reactstrap'
import './selectCompliences.css';


export default class SelectCompliences extends React.Component {

	  static propTypes = {
          value: PropTypes.bool,
          className: PropTypes.string,
      }


	render() { 
		const {
              className,
              name,
              onChange,
              data,
          } = this.props
    
    let filtered = []
    
    data.forEach((item) => {
      if (filtered.indexOf(item[name]) === -1) {
        filtered.push(item[name])
      }
    })
		
    return (

        <FormGroup className={(className)}>
          <Input type="select" onChange={onChange}>
              <option value="all">жалобы</option>
              {
                filtered.map((item, i) => {
                  return (
                      <option value={item} key={i}>{item}</option>
                    )
                })
              }
               
          </Input>
        </FormGroup>
		)
	}
}

