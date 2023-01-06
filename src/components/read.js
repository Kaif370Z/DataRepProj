import React from "react";
import { Bikes } from "./bikes";
import axios from "axios";

export class Read extends React.Component {

    //this should refresh the page after deleting a bike
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:3420/api/bikes')
            .then(
                (response) => {
                    this.setState({ bikes: response.data })
                })
            .catch((error) => {
                console.log(error)
            });
    }

    state = {
        bikes: []
    }

    render() {
        return (
            <div>
                <h2>Read Component</h2>
                <Bikes bikes={this.state.bikes} Reload={this.componentDidMount}></Bikes>
            </div>
        );
    }
}