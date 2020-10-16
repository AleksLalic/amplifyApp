import React, {Component,useEffect,useState} from 'react'
import Table from './Table'
import AForm from './Form'
import 'bootstrap/dist/css/bootstrap.min.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listCustomers } from './graphql/queries';
import { createCustomer as createCustomerMutation, deleteCustomer as deleteCustomerMutation } from './graphql/mutations';
import Amplify, { API} from 'aws-amplify';

import { Container, Row, Col} from 'react-bootstrap';

class App extends Component {
 state = {
    customers: [],
  }


 async componentDidMount() {
     
    this.onFetchFromAPI();
  }
  
  async onFetchFromAPI(){
    const apiData = await API.graphql({ query: listCustomers });

    var result = [...apiData.data.listCustomers.items].map(e => ({id:e.id,company:e.company,contact:e.contact,country:e.country}));
    
    
    result.map(item =>( this.setState({customers: [...this.state.customers, item]})));

   
    console.log(result);
    //this.setState({customers: [...this.state.customers, result]});
    console.log("after the fetch")
    console.log(this.state.customers);
  };

 

 async createCustomer(customer) {
   console.log(customer);
    if (!customer.company || !customer.country || !customer.contact) return;
    await API.graphql({ query: createCustomerMutation, variables: { input: customer} });
    //setNotes([ ...notes, formData ]);
    //setFormData(initialFormState);
  }

removeCustomer= (index) => {
  
  this.deleteCustomer(index);
}

async  deleteCustomer({ id }) {
  const {customers} = this.state;
  const newCustomerArray = customers.filter(customer=> customer.id !== id);
  this.setState({customers:newCustomerArray});
  await API.graphql({ query: deleteCustomerMutation, variables: { input: { id } }});
}

handleSubmit = (customer) => {
  this.createCustomer(customer);
  this.setState({customers: [...this.state.customers, customer]})
  console.log("after the add")
  console.log(this.state.customers);
}

  render() {
 const customers= this.state.customers;
 const custs = customers;
 console.log(custs);
    return (
      <div className="App">
        <Table customerData={customers} removeCustomer={this.removeCustomer} />
<br />
     <AForm handleSubmit={this.handleSubmit} />
     <br />
     <Container>
  <Row xs={2} md={4} lg={6}>
    <Col><AmplifySignOut /></Col>
  </Row>
  </Container>
	    
      </div>
    )
  }
}

export default withAuthenticator(App);
