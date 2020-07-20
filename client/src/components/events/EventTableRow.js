import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EventTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    deleteEvent() {
        axios.delete('http://localhost:8000/events/delete-event/' + this.props.obj._id)
            .then((res) => {
                console.log('Event successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.organizer}</td>
                <td>{this.props.obj.time}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.description}</td>
                <td>
                    <Link className="edit-link" to={"/buy-ticket"}>
                        Buy Ticket
                    </Link>
                    <Button onClick={this.deleteEvent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}