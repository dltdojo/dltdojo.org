import React, { Component } from 'react';
import { PrivateKey } from 'bitcore-lib';
import { Networks } from 'bitcore-lib';
import { jsonld } from 'jsonld';
import { jsig } from 'jsonld-signatures';
import { Message } from 'bitcore-message';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.keys = this.generateKeys()
    this.signMessage()
    console.log(this)
  }

  render() {
    let { pk, tpk } = this.keys
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bitcoin Test Page</h2>
        </div>
        <h1>1. 金鑰</h1>
        <h2>Mainnet</h2>
        <h4>PrivateKey(Hex): {pk.priv}</h4>
        <h4>PrivateKey(WIF): {pk.wif}</h4>
        <h4>PublicKey(Hex): {pk.pub}</h4>
        <h4>Address: {pk.address}</h4>
        <hr />
        <h2>Testnet</h2>
        <h4>PrivateKey(WIF): {tpk.wif}</h4>
        <h4>Address: {tpk.address}</h4>
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
  // bitcore-lib  https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md
  // JSON-LD Playground https://json-ld.org/playground/
  // Linked Data Signatures specification for JSON-LD https://github.com/digitalbazaar/jsonld-signatures
  signMessage() {

    jsig.use('jsonld', jsonld)
    let privateKey = new PrivateKey('L23PpjkBQqpAF4vbMHNfTZAb3KFPBSawQ7KinFTzz7dxq6TZX8UA');

    let target = 'HELLO DLTDOJO 2017'
    let message = new Message(target);
    console.log(message)
    let signature = message.sign(privateKey);

    let address = '13Js7D3q4KvfSqgKN8LpNq57gcahrVc5JZ';
    let verified = new Message(target).verify(address, signature);
    console.log(verified)
  }

}

export default App;
