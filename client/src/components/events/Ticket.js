import React, {Component} from 'react';
import { Link } from "react-router-dom"
import Navbar from '../layout/Navbar';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form'


class Ticket extends Component {



    render() {
        return (
            <div>
                <h1 className="large text-primary">E-ticket</h1>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Email">
          <Form.Label>Name :</Form.Label>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Last Name :</Form.Label>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>ID :</Form.Label>
        </Form.Group>
      </Form>
            </div>    
        );
    }
}

export default Ticket ;