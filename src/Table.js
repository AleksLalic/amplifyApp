import React, {Component} from 'react'

const TableHeader = () => {
  return (
        <thead>
          <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Remove</th>
 </tr>
</thead>
  )
}
const TableBody = (props) => {
const rows = props.customerData.map((row, index)=>{
  return (
  <tr key={index}>
    <td>{row.company}</td>
    <td>{row.contact}</td>
    <td>{row.country}</td>
 <td>
    <button class="button" onClick={() => props.removeCustomer(index)}>Delete</button>
  </td>
  </tr>
  )
 })

return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {

  const {customerData, removeCustomer} = this.props

    return (
      <table id="customers">
	 <TableHeader />
         <TableBody customerData ={customerData} removeCustomer={removeCustomer} />
      </table>
    )
  }
}

export default Table