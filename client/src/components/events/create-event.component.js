import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class CreateEvent extends Component {

  constructor(props) {
    super(props)


    this.onChangeStudentTitle = this.onChangeStudentTitle.bind(this);
    this.onChangeStudentOrganizer = this.onChangeStudentOrganizer.bind(this);
    this.onChangeStudentTime = this.onChangeStudentTime.bind(this);
    this.onChangeStudentType = this.onChangeStudentType.bind(this);
    this.onChangeStudentDescription = this.onChangeStudentDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      title: '',
      organizer: '',
      time: '',
      type: '',
      description: ''
    }
  }

  onChangeStudentTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeStudentOrganizer(e) {
    this.setState({ organizer: e.target.value })
  }

  onChangeStudentTime(e) {
    this.setState({ time: e.target.value })
  }

  onChangeStudentType(e) {
    this.setState({ type: e.target.value })
  }

  onChangeStudentDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      title: this.state.title,
      organizer: this.state.organizer,
      time: this.state.time,
      type: this.state.type,
      description: this.state.description
    };

    axios.post('http://localhost:8000/events/create-event', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      organizer: '',
      time: '',
      type: '',
      description: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeStudentTitle} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Organizer</Form.Label>
          <Form.Control type="email" value={this.state.organizer} onChange={this.onChangeStudentOrganizer} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Time</Form.Label>
          <Form.Control type="text" value={this.state.time} onChange={this.onChangeStudentTime} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" value={this.state.type} onChange={this.onChangeStudentType} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeStudentDescription} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Create Event
        </Button>
      </Form>
    </div>);
  }
}
