## Install composer

Chris-McQueen-Development/logistics-chain https://github.com/Chris-McQueen-Development/logistics-chain

```
// updating the project

composer archive create --sourceType dir --sourceName ../
composer network update -a ./outbound-logistics@0.0.1.bna -c admin@outbound-logistics
composer card delete -n admin@outbound-logistics
composer card import -f admin@outbound-logistics.card
```

## Repositories

* AutarkXuUse/sharedAssets https://github.com/AutarkXuUse/sharedAssets
* https://github.com/AutarkXuUse/sharedAssets/blob/master/install.sh
* composer-developer-cookbook/ISSUE_THESE_COMMANDS.sh at master · ampretia/composer-developer-cookbook https://github.com/ampretia/composer-developer-cookbook/blob/master/quick-start/ISSUE_THESE_COMMANDS.sh
* hku-hyperledger-composer-project/studentLoan.cto at master · nikosheng/hku-hyperledger-composer-project https://github.com/nikosheng/hku-hyperledger-composer-project/blob/master/models/studentLoan.cto

## Healthcare

HealthChain/product.cto at master · umeshbi/HealthChain https://github.com/umeshbi/HealthChain/blob/master/Composer/models/product.cto

```
transaction RegisterDoctor{
  --> Doctor doctor
  --> Patient patient
  --> PatientDoctorContract contract
}

transaction AddDoctorContracts{
  --> Doctor doctor
  --> PatientDoctorContract contract
}

transaction AddMedicalShopContracts{
  --> MedicalShop medicalShop
  --> PatientMedicalShopContract contract
}

transaction RegisterMedicalShop{
  --> MedicalShop medicalShop
  --> Patient patient
  --> PatientMedicalShopContract contract
}

transaction BookAppointment{
 o String appointmentDate
 o String appointmentTime
 --> Patient patient
 --> Doctor doctor
}

transaction CompleteAppointment{
   o String description
  --> Appointment appointment
 --> Patient patient
 --> Doctor doctor
 
}

transaction PurchaseMedicines{
 --> Patient patient
}

transaction CompleteTransaction{
 --> Patient patient
 --> MedicalShop medicalShop
  o Double medicineCharges
 
}
```


## volunteer network

iVolunteerPrototype-v1/at.jku.cis.cto at master · pstarzer2/iVolunteerPrototype-v1 https://github.com/pstarzer2/iVolunteerPrototype-v1/blob/master/blockchain-network/models/at.jku.cis.cto

## certificate 

roychowdhuryrohit-dev/EduBlock-Rajasthan-Hackathon-4.0 https://github.com/roychowdhuryrohit-dev/EduBlock-Rajasthan-Hackathon-4.0

degree-authenticity/piitest.cto at master · bsollenb/degree-authenticity https://github.com/bsollenb/degree-authenticity/blob/master/piitest.cto

## copyright

cl-and-b-ny-2018-model/SimpleCopyright.cto at master · relateid/cl-and-b-ny-2018-model https://github.com/relateid/cl-and-b-ny-2018-model/blob/master/packages/simple-copyright-model/models/SimpleCopyright.cto

