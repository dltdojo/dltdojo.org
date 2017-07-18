# DDJCA

* https://github.com/hyperledger/fabric-ca

### Install Docker

```
$ sudo apt-get update 
$ sudo apt-get install -y apt-transport-https golang ca-certificates curl git jq tree software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update && sudo apt-get install -y docker-ce docker-compose
$ sudo usermod -aG docker $USER
```

### Run ca server

```
$ docker run -it --rm hyperledger/fabric-ca:x86_64-1.0.0 fabric-ca-server start -b admin:adminPw
2017/07/17 02:33:11 [INFO] Created default configuration file at /etc/hyperledger/fabric-ca-server/fabric-ca-server-config.yaml
2017/07/17 02:33:11 [INFO] Starting server in home directory: /etc/hyperledger/fabric-ca-server
2017/07/17 02:33:11 [INFO] The CA key and certificate files already exist
2017/07/17 02:33:11 [INFO] Key file location: /etc/hyperledger/fabric-ca-server/ca-key.pem
2017/07/17 02:33:11 [INFO] Certificate file location: /etc/hyperledger/fabric-ca-server/ca-cert.pem
2017/07/17 02:33:11 [INFO] Initialized sqlite3 database at /etc/hyperledger/fabric-ca-server/fabric-ca-server.db
2017/07/17 02:33:11 [INFO] Home directory for default CA: /etc/hyperledger/fabric-ca-server
2017/07/17 02:33:11 [INFO] Listening on http://0.0.0.0:7054
```

### build image from sources

```
$ curl -sL https://github.com/hyperledger/fabric-ca/archive/v1.0.0.tar.gz | tar zx 
$ cd fabric-ca-1.0.0/
$ make all
```