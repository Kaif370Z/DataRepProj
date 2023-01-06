import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from "axios";
//import { Button } from "bootstrap";

export class Motorbike extends React.Component {

    //deleting a bike from the read page
    constructor(){
        super();
        this.DeleteBike = this.DeleteBike.bind(this);
    }
    DeleteBike(e){
        e.preventDefault();

        axios.delete('http://localhost:3420/api/bikes/'+this.props.bike._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.bike.make}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.bike.photo}></img>
                            <hr></hr>
                            <Card.Header>{this.props.bike.model}</Card.Header>
                            <Card.Header>{this.props.bike.year}</Card.Header>
                        </blockquote>
                    </Card.Body>
                <Link to={'/edit/'+this.props.bike._id} className='btn btn-primary'>Edit</Link>
                <Button variant="danger" onClick={this.DeleteBike}>Delete</Button>
                </Card>
            </div>
        );
    }
}