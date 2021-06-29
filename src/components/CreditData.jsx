import React, { Component } from "react";

class CreditData extends Component {
  state = {
    cardNum: "",
    expirMon: "",
    expirYear: "",
    cvv: "",
  };

  setCardN = (e) => this.setState({ cardNum: e.target.value });
  setExpirationM = (e) => this.setState({ setExpirationM: e.target.value });
  setExpirationY = (e) => this.setState({ setExpirationY: e.target.value });
  setCardCvv = (e) => this.setState({ setCardCvv: e.target.value });
  render() {
    const { cardNum, expirMon, expirYear, cvv } = this.state;
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Credit Card Number:
          <input type="text" value={cardNum} onChange={this.setCardN} />
        </label>
        <label>
          Expiration Date:
          <input
            type="number"
            value={expirMon}
            onChange={this.setExpirationM}
            maxlength="2"
          />
          <input
            type="number"
            value={expirYear}
            onChange={this.setExpirationY}
            maxlength="2"
          />
        </label>
        <label>
          Security Code:
          <input type="number" value={cvv} onChange={this.setCardCvv} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default CreditData;
