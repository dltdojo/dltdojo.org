## Install

```
git clone https://github.com/hyperledger/composer-sample-applications.git
cd composer-sample-applications/packages/vehicle-manufacture/

$ DEMO_FABRIC_VERSION=hlfv11 ./build.sh

# Grab the directory containing this script.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
 cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd
 dirname "${BASH_SOURCE[0]}"
cd "${DIR}/installers"

if [ -z ${DEMO_FABRIC_VERSION+x} ]; then
 echo "FABRIC_VERSION is unset, assuming hlfv1"
 export DEMO_FABRIC_VERSION="hlfv1"
else
 echo "DEMO_FABRIC_VERSION is set to '$DEMO_FABRIC_VERSION'"
fi
DEMO_FABRIC_VERSION is set to 'hlfv11'

# clean up
rm -rf $DEMO_FABRIC_VERSION/fabric-dev-servers/
rm -f fabric-dev-servers.zip

# Get the fabric tools
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  133k  100  133k    0     0  63546      0  0:00:02  0:00:02 --:--:-- 63556

# Build all of the installers.
unzip -q fabric-dev-servers.zip -d $DEMO_FABRIC_VERSION/fabric-dev-servers/
$DEMO_FABRIC_VERSION/build.sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
 cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd
 dirname "${BASH_SOURCE[0]}"

ROOT=$DIR/../..

cd $ROOT
npm install vehicle-manufacture-network@~0.2.1 --no-save
+ vehicle-manufacture-network@0.2.2
updated 1 package in 1.314s

cd "${DIR}"
cat install.sh.in | sed \
    -e 's/{{COMPOSER-VERSION}}/next/g' \
    -e 's/{{VEHICLE-LIFECYCLE-VERSION}}/latest/g' \
    -e 's/{{NODE-RED-VERSION}}/next/g' \
    > install.sh
echo "PAYLOAD:" >> install.sh
tar czf - -C $DIR $ROOT/node_modules/vehicle-manufacture-network/dist -C $DIR flows.json fabric-dev-servers >> install.sh
tar: Removing leading `/home/joyelin/smb/composer-sample-applications/packages/vehicle-manufacture/installers/hlfv11/../../' from member names

# clean up
rm -rf $DEMO_FABRIC_VERSION/fabric-dev-servers/
rm -f fabric-dev-servers.zip
[joyelin@ubuntu vehicle-manufacture]$ tree installers/
installers/
├── hlfv1
│   ├── build.sh
│   ├── flows.json
│   ├── install.sh
│   ├── install.sh.in
│   └── install-unstable.sh
└── hlfv11
    ├── build.sh
    ├── flows.json
    ├── install.sh
    └── install.sh.in

2 directories, 9 files

```

cat installers/hlfv11/install.sh | bash

docker pull hyperledger/vehicle-manufacture-vda ERROR · Issue #119 · hyperledger/composer-sample-applications https://github.com/hyperledger/composer-sample-applications/issues/119