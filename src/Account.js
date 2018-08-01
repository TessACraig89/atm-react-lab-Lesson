import React, { Component } from 'react';

export default class Account extends Component {
  render() {
    // set a ref property on text field, this is a callback function to save a reference to the text field in out Account object. This is how we can access the data in the field later 
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}
