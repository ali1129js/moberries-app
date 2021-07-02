import React, { Component } from "react";

class CreditData extends Component {
  state = {
    cardNum: "",
    expirMon: "",
    expirYear: "",
    cvv: "",
    email: "",
  };
  //methods to update this state and callback to parent
  setCardN = (e) =>
    this.setState({ cardNum: e.target.value }, () =>
      this.props.handleCreditData(this.state)
    );
  setExpirationM = (e) =>
    this.setState({ expirMon: e.target.value }, () =>
      this.props.handleCreditData(this.state)
    );
  setExpirationY = (e) =>
    this.setState({ expirYear: e.target.value }, () =>
      this.props.handleCreditData(this.state)
    );
  setCardCvv = (e) =>
    this.setState({ cvv: e.target.value }, () =>
      this.props.handleCreditData(this.state)
    );
  setEmail = (e) =>
    this.setState({ email: e.target.value }, () =>
      this.props.handleCreditData(this.state)
    );
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { cardNum, expirMon, expirYear, cvv, email } = this.state;
    return (
      <div className="container-sm">
        <div className="creditform">
          <form onSubmit={this.handleSubmit}>
            Credit Card Number:
            <input
              type="text"
              name="cardNum"
              placeholder="0000 0000 0000 0000"
              value={cardNum}
              onChange={this.handleChange}
              maxLength="12"
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
            <br />
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
              type="email"
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
          className="btn btn-outline-info btn-lg"
          onClick={this.props.handleConfirm}
        >
          Next
        </button>
      </div>
    );
  }
}
export default CreditData;
