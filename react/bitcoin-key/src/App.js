import React, { Component } from 'react';
import logo from './logo.svg';
import { PrivateKey } from 'bitcore-lib';
import { Networks } from 'bitcore-lib';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.keys = this.generateKeys()
    console.log(this)
  }
  render() {
    let { pk, tpk } = this.keys
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bitcoin Key</h2>
        </div>
          <h4>Mainnet PrivateKey(Hex): {pk.priv}</h4>
          <h4>Mainnet PublicKey(Hex): {pk.pub}</h4>
          <h4>Mainnet PrivateKey(WIF): {pk.wif}</h4>
          <h4>Mainnet Address: {pk.address}</h4>
          <hr/>
          <h4>Testnet PrivateKey(WIF): {tpk.wif}</h4>
          <h4>Testnet Address: {tpk.address}</h4>
        <div className="App-intro">
          HELLO DLTDOJO REACT
        </div>
      </div>
    );
  }

  generateKeys() {
    let pk = new PrivateKey(Networks.livenet);
    let tpk = new PrivateKey(Networks.testnet);
    let pkResult = {
      key: pk,
      priv: pk.toString('hex'),
      wif: pk.toWIF(),
      pub: pk.toPublicKey().toString('hex'),
      address: pk.toAddress().toString()
    }
    let tpkResult = {
      key: tpk,
      wif: tpk.toWIF(),
      pub: tpk.toPublicKey().toString('hex'),
      address: tpk.toAddress().toString()
    }
    return { pk: pkResult, tpk: tpkResult }
  }
}

export default App;
