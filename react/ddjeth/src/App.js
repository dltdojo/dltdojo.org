import React, { Component } from 'react';
import './App.css';
import Wallet from 'ethereumjs-wallet';

class App extends Component {

  constructor(props) {
    super(props)
    this.keys = this.generateKeys()
    console.log(this)
  }

  render() {
    let {privateKey, publicKey, address} = this.keys
    return (
      <div className="App">
        <div className="App-header">
          <h2>DLTDOJO ETHEREUM TESTPAGE</h2>
        </div>
        <h4>PrivateKey: {privateKey}</h4>
        <h4>PublicKey: {publicKey}</h4>
        <h4>Address: {address}</h4>
        <p className="App-intro">
          DDJETH
        </p>
      </div>
    );
  }

  generateKeys() {
    let wallet = Wallet.generate()
    return {
      privateKey: wallet.getPrivateKeyString(),
      publicKey: wallet.getPublicKeyString(),
      address: wallet.getChecksumAddressString()
    }
  }
}

export default App;
