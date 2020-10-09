import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
 state = {
    customers: [ 
    {
        company:'Alfreds Futterkiste',
        contact:'Maria Anders',
	country:'Germany',
      },
      {
        company:'Berglunds snabbköp',
        contact:'Christina Berglund',
	country:'Sweden',
      },
      {
        company:'Centro comercial Moctezuma',
        contact:'Francisco Chang',
	country:'Mexicao',
      },
      {
        company:'Ernst Handel',
        contact:'Rolan Mendel',
	country:'Austria',
      },
      {
        company:'Bryce Engineering',
        contact:'Bruce Heywood',
	country:'Australia',
      },
    ],
  }

removeCustomer= (index) => {
  const {customers} = this.state

  this.setState({
    customers: customers.filter((customers, i) => {
      return i !== index
    }),
  })
}

  render() {
 const customers= this.state.customers;

    return (
      <div className="App">
        <Table customerData={customers} removeCustomer={this.removeCustomer} />
      </div>
    )
  }
}

export default App
