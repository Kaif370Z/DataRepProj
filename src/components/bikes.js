import React from "react";
import { Motorbike } from "./motorbike";

export class Bikes extends React.Component {
    render() {
        return this.props.bikes.map(
            (bike) => {
                return <Motorbike bike={bike} key={bike._id} Reload={this.props.Reload}></Motorbike>
            }
        );
    }
}