## How to install and run tests

```
forge build
```

## Deployment and verification steps

```
forge script script/deploy.s.sol --rpc-url sepolia --broadcast --private-key <> --verify --etherscan-api-key <>
```

## Generate signature

```
cd ./js_scripts
node generate-pay-stub.js
```

## Verified contracts addresses

Implementation: 0xFb865E4C265FBf60DB425e93F25bFA892F579049
Factory: 0xD987298df59FE90f88b33f65204Dbe1CCf352617

## Proof of execution

createPayroll tx: https://sepolia.etherscan.io/tx/0x1db3b84364d6e1fd9a049df9865e3f8bfde4902d37562ae23a98a78622b61b4f
fund: https://sepolia.etherscan.io/tx/0x296b5f188e4822216d69387b62c41c0933dda4cdd2ea9f205c5fb88cd6222101
claimSalary tx: https://sepolia.etherscan.io/tx/0xecc99ad554ed092d19c42f2b5ab6787024362ccedac5c6c31906efd4908afe0b
