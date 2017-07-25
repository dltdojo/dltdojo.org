This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* Error: More than one instance of bitcore-lib found https://github.com/bitpay/bitcore-lib/issues/21

```
$ find . -type d -name bitcore-lib
./node_modules/bitcore-lib
./node_modules/bitcore-message/node_modules/bitcore-lib
./node_modules/jsonld-signatures/node_modules/bitcore-lib
```
