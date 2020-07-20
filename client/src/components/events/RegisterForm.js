import React, {Component} from 'react';
import { Link } from "react-router-dom"
import Navbar from '../layout/Navbar';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form'


class RegisterForm extends Component {



    render() {
        return (
            <div>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>CIN</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email"  />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
          <Link to="/get-ticket">
        <Button variant="danger" size="lg" block="block" type="submit">
          Get Ticket
        </Button>
        </Link>
      </Form>
            </div>    
        );
    }
}

export default RegisterForm ;