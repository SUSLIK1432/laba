import React  from 'react'
  
  //import from 'classname'
  import PropTypes from 'prop-types'
  import {Label, Input, FormGroup} from 'reactstrap'
  
  //import './CheckboxField.scss'
  
  class CheckboxField extends React.Component {
  
      static propTypes = {
          name: PropTypes.string,
          label: PropTypes.string,
          value: PropTypes.bool,
          className: PropTypes.string,
          onChange: PropTypes.func
      }
  
      static defaultProps = {
          value: false,
          onChange: function () {}
      }
  
      onChange = e => {
          const value = e.target.checked
          const { name, onChange: cb } = this.props
          cb(name, value)
      }
  
      render() {
          const {
              label,
              value,
              className
          } = this.props
  
          return (
              <FormGroup check className={('CheckboxField', className)}>
                 <Label
                         check
                         onClick={this.onClick}
                         className='CheckboxField-Label'>
                    <Input
                            type='checkbox'
                            value={value}
                            onClick={this.onChange}
                            className='CheckboxField-Checkbox'
                    />
                    {label}
                </Label>
              </FormGroup>
          )
      }
  }
  
  export default CheckboxField;