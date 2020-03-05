import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next'





class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	

   static defaultProps = {
     data: [],
     columns: [],
     keyField: 'id',
     //noDataText: NO_DATA_TEXT,

     isRemote: true,
     isStriped: true,
     isLoading: false,

     hasHover: false,
     hasHeader: false,
     hasBorders: false,

     getRowStyle: function() { return null }
   }

   getRowStyle = (row, rowIndex) => {
     return this.props.getRowStyle(row, rowIndex)
   }

   render() {
     const {
       data,
       columns,
       keyField,
       expandRow,
       className,
       //containerClass,
       isStriped,
       hasBorders,
       hasHover,
       noDataText,
     } = this.props

     return (
       <div>
         <BootstrapTable className="__Table"
                 expandRow={expandRow}
                 data={data}
                 columns={columns}
                 keyField={keyField}
                 classes={('Table', className)}
                 //headerClasses={'Table-Header'}
                 striped={isStriped}
                 hover={hasHover}
                 bordered={hasBorders}
                 rowStyle={this.getRowStyle}
                 noDataIndication={noDataText}
         />
       </div>
     )
   }
  }

export default Table;
