/*
Each Parameter {Duration,Amount,UpFront} has its own component.
Each component has a handler method to update parent with selected values
*/

import React, { Component } from "react";
import Duration from "./Duration";
import Amount from "./Amount";
import UpFront from "./UpFront";

class SelectPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "12",
      amount: 5,
      upfront: false,
      total: 10,
    };
  }

  //methods to update this state and callback to calculate cost
  handleDuration = (value) => {
    this.setState({ duration: value }, () => this.calculateCost());
  };
  handleAmount = (value) => {
    this.setState({ amount: value }, () => this.calculateCost());
  };
  handleUpFront = (value) => {
    this.setState({ upfront: value }, () => this.calculateCost());
  };
  //Calculate Cost
  calculateCost = () => {
    //Destructuring state
    const { duration, amount, upfront } = this.state;
    //getting prices from props
    const arrayPrices = this.props.plans.map((plan) => plan.price_usd_per_gb);
    // calclate with 10% reduced prices
    if (upfront && duration === "3") {
      let total = amount * arrayPrices[0] * 0.9;
      //update state and send it up
      this.setState({ total: total }, () =>
        this.props.handlUpdateSelect(this.state)
      );
    } else if (upfront && duration === "6") {
      let total = amount * arrayPrices[1] * 0.9;
      this.setState({ total: total }, () =>
        this.props.handlUpdateSelect(this.state)
      );
    } else if (upfront && duration === "12") {
      let total = amount * arrayPrices[2] * 0.9;
      this.setState({ total: total }, () =>
        this.props.handlUpdateSelect(this.state)
      );
    } else if (!upfront && duration === "3") {
      let total = amount * arrayPrices[0];
      this.setState({ total: total }, () =>
        this.props.handlUpdateSelect(this.state)
      );
    } else if (!upfront && duration === "6") {
      let total = amount * arrayPrices[1];
      this.setState({ total: total }, () =>
        this.props.handlUpdateSelect(this.state)
      );
    } else if (!upfront && duration === "12") {
      let total = amount * arrayPrices[2];
      this.setState({ total: total }, () =>
        this.props.handlUpdateSelect(this.state)
      );
    }
  };
  render() {
    return (
     
        <div className="select">
          <div className="params">
            <div className="header">Select your Plan</div>
            <Duration handleDuration={this.handleDuration} />
            <Amount handleAmount={this.handleAmount} />
            <UpFront handleUpFront={this.handleUpFront} />
          </div>
          <button
            className="btn btn-outline-info btn-lg"
            onClick={() => this.props.handleNext(this.state)}
          >
            Next
          </button>
        </div>
      
    );
  }
}
export default SelectPlan;
