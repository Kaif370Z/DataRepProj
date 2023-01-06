import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBikeMake = this.onChangeBikeMake.bind(this);
        this.onChangeBikeModel = this.onChangeBikeModel.bind(this);
        this.onChangeBikeYear = this.onChangeBikeYear.bind(this);
        this.onChangeBikePhoto = this.onChangeBikePhoto.bind(this);

        this.state = {
            make:'',
            model:'',
            year:'',
            photo:''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`${this.state.make}`);
        console.log(`${this.state.model}`);
        console.log(`${this.state.year}`);
        console.log(`${this.state.photo}`);

        const bike = {
            make:this.state.make,
            model:this.state.model,
            year:this.state.year,
            photo:this.state.photo
        }
        
        axios.post('http://localhost:3420/api/bikes',bike)
        .then()
        .catch();
        this.setState({
            make:'',
            model:'',
            year:'',
            photo:''
        })
    }

    onChangeBikeMake(event){
        this.setState({
            make:event.target.value
        })
    }

    onChangeBikeModel(event){
        this.setState({
            model:event.target.value
        })
    }

    onChangeBikeYear(event){
        this.setState({
            year:event.target.value
        })
    }

    onChangeBikePhoto(event){
        this.setState({
            photo:event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Add the bikes you own to show off your collection!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add the Make of the bike: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.make}
                            onChange={this.onChangeBikeMake}
                        />
                        <label>Add the Model of the bike:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeBikeModel}
                        />
                        <label>Add the Year of the bike:</label>
                        <input type ="text"
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeBikeYear}
                        />
                        <label>Add the photo of the bike:</label>
                        <input type ="text"
                            className="form-control"
                            value={this.state.photo}
                            onChange={this.onChangeBikePhoto}
                        />
                        </div>
                    <input type="submit" value="Add Bike ;)" />
                </form>
            </div>
        );
    }
}