import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [photo, setPhoto] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:3420/api/bike/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setMake(response.data.make);
                setModel(response.data.model);
                setYear(response.data.year);
                setPhoto(response.data.photo);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newBike = {
            id: id,
            make: make,
            model: model,
            year: year,
            photo: photo
        };
        axios.put('http://localhost:3420/api/bike/' + id, newBike)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Make of the bike: </label>
                    <input type="text"
                        className="form-control"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Model of the bike: </label>
                    <input type="text"
                        className="form-control"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Year of the bike </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    </div>
                <div className="form-group">
                    <label>Add Photo of the bike </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Bike" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    );
}