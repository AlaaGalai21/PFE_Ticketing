import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './EventTableRow';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";


export default class EventList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/events/')
      .then(res => {
        this.setState({
          events: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.events.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <div>
        <Link to='/create-event'>
        <Button>Create New Event</Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Organizer</th>
            <th>Time</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}