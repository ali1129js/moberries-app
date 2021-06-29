/*
This Comonent :
-fetch Data from endpoint and pass it as props
-error handling
-Conditional rendering
*/

import React, { Component } from "react";
import Spinner from "./components/Spinner";
import SelectPlan from "./components/selectPlans/SelectPlan";
import CreditData from "./components/CreditData";
import CurrentSubs from "./components/CurrentSubs";
import Confirmation from "./components/Confirmation";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plans: [],
      step: "1",
      duration: "12",
      amount: 5,
      upfront: false,
      email: "",
      total: 10,
    };
  }
  //fetch Data
  componentDidMount() {
    fetch("https://cloud-storage-prices-moberries.herokuapp.com/prices")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            plans: res.subscription_plans,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleNext = (selected) => {
    this.setState({ step: "2" });
  };

  //update App.js from SelectPlan.js
  handlUpdateSelect = (state) => {
    this.setState({
      duration: state.duration,
      amount: state.amount,
      upfront: state.upfront,
      total: state.total,
    });
  };

  render() {
    const {
      error,
      isLoaded,
      plans,
      step,
      duration,
      amount,
      total,
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="h3 p-5 m-5">
          <p>Hold on while fetching data.</p>
          <Spinner />
        </div>
      );
    } else if (step === "1") {
      return (
        <div className="container-sm">
          <CurrentSubs duration={duration} amount={amount} total={total} />
          <SelectPlan
            plans={plans}
            handleNext={this.handleNext}
            handlUpdateSelect={this.handlUpdateSelect}
          />
        </div>
      );
    } else if (step === "2") {
      return (
        <div className="container-sm">
          <CurrentSubs duration={duration} amount={amount} total={total} />
          <CreditData handleSubmit={this.handleSubmit} />
        </div>
      );
    } else if (step === "3") {
      return (
        <div className="container-sm">
          <CurrentSubs duration={duration} amount={amount} total={total} />
          <Confirmation />
        </div>
      );
    }
  }
}

export default App;
