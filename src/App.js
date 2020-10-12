import React, {Component} from 'react'
import Table from './Table'
import AForm from './Form'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 state = {
    customers: [],
  }

removeCustomer= (index) => {
  const {customers} = this.state

  this.setState({
    customers: customers.filter((customers, i) => {
      return i !== index
    }),
  })
}

handleSubmit = (customer) => {
  this.setState({customers: [...this.state.customers, customer]})
}

  render() {
 const customers= this.state.customers;

    return (
      <div className="App">
        <Table customerData={customers} removeCustomer={this.removeCustomer} />
<br />
     <AForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
