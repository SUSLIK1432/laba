import React from 'react';
import './textField.css';
//import cn from 'classname'
import PropTypes from 'prop-types'
import {Label, Input, FormGroup} from 'reactstrap'




//class Filter extends React.Component {
export default class TextField extends React.Component {

	  static propTypes = {
          type: PropTypes.oneOf(['text','textarea', 'email', 'password', 'date']),
          name: PropTypes.string,
          label: PropTypes.string,
          value: PropTypes.string,
          className: PropTypes.string,
          placeholder: PropTypes.string,
          onChange: PropTypes.func
      }

      static defaultProps = {
          type: 'text',
          value: '',
          onChange: function () {}
      }

      onChange = e => {
          const value = e.target.value
          const { name, onChange: cb } = this.props
          cb(name, value)
      }

	


	render() { 
		const {
              type,
              name,
              label,
              value,
              className,
              placeholder
          } = this.props
	
		return (
				<FormGroup className={('TextField', className)}>
                  {label ? (
                      <Label className='TextField-Label'>
                        {label}
                      </Label>
                  ) : null}
                  <Input
                          type={type}
                          name={name}
                          value={value}
                          placeholder={placeholder}
                          className='TextField-Input'
                          onChange={this.onChange}
                  />
              </FormGroup>
		)
	}
}

//export default Filter;
