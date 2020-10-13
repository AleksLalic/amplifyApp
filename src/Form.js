import React, {Component} from 'react'
import { Form } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

import { Button } from 'react-bootstrap';


class AForm extends Component {
  initialState = {
    company: '',
    contact: '',
    country: '',
  }

  state = this.initialState

handleChange = (event) => {
  const {name, value} = event.target

  this.setState({
    [name]: value,
  })
}
submitForm = () => {
  this.props.handleSubmit(this.state)
  this.setState(this.initialState)
}
render() {
  const { company, contact,country} = this.state;

  return (
	<Container>

<Alert variant="secondary">
  <Alert.Heading>Add new customer</Alert.Heading>
  </Alert>
    <Form>
	<Form.Group>
	<Form.Row>
	 <Form.Label>Company</Form.Label>
  	<Form.Control type="text" name="company" id="company" placeholder="Company" value={company}
        onChange={this.handleChange}/>
  	</Form.Row>
        <Form.Row>
	 <Form.Label>Contact</Form.Label>
  	<Form.Control type="text" name="contact" id="contact" placeholder="Contact"  value={contact}
        onChange={this.handleChange}/>
  	</Form.Row>
        <Form.Row>
	 <Form.Label>Country</Form.Label>
  	<Form.Control type="text" name="country" id="country"  placeholder="Country" value={country}
        onChange={this.handleChange} />
	</Form.Row>
    	</Form.Group>
	<Button variant="primary" type="button" onClick={this.submitForm}>
   		 Submit
  	</Button>
	</Form>
	</Container>
   
  );
}


}

  export default AForm;