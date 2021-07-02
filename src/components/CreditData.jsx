import React, { Component } from "react";

class CreditData extends Component {
  state = {
    cardNum: "",
    expirMon: "",
    expirYear: "",
    cvv: "",
    email: "",
  };

  //Update this state and callback to parent
  handleChange = (e) => {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => this.props.handleCreditData(this.state)
    );
  };

  render() {
    const { cardNum, expirMon, expirYear, cvv, email } = this.state;
    return (
      <div className="container-sm">
        <div className="creditform">
          <form>
            Credit Card Number:
            <input
              type="text"
              name="cardNum"
              placeholder="0000 0000 0000 0000"
              value={cardNum}
              onChange={this.handleChange}
              maxLength="16"
              required
            />
            <br />
            <div className="expir">
              Expiration Date:
              <input
                type="text"
                name="expirMon"
                placeholder="00"
                className="ccinfo"
                value={expirMon}
                onChange={this.handleChange}
                maxLength="2"
                required
              />
              <input
                type="text"
                name="expirYear"
                placeholder="00"
                className="ccinfo"
                value={expirYear}
                onChange={this.handleChange}
                maxLength="2"
                required
              />
            </div>
            Security Code:
            <input
              type="text"
              name="cvv"
              placeholder="000"
              value={cvv}
              onChange={this.handleChange}
              maxLength="3"
              required
            />
            <br />
            Email:
            <input
              type="text"
              name="email"
              placeholder="jon@mail.com"
              value={email}
              onChange={this.handleChange}
              required
            />
          </form>
        </div>

        <button
          type="button"
          className="btn btn-outline-info btn-lg"
          onClick={this.props.handleBack}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-lg m-2"
          onClick={this.props.handleConfirm}
        >
          Next
        </button>
      </div>
    );
  }
}
export default CreditData;
