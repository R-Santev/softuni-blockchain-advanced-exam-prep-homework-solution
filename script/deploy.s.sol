// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {PayrollFactory} from "../src/PayrollFactory.sol";
import {Payroll} from "../src/Payroll.sol";

contract DeployScript is Script {
    function run() external {
        address hrAddress = vm.envAddress("HR_ADDRESS");

        vm.startBroadcast();

        Payroll payrollImplementation = new Payroll();
        console.log(
            "Payroll implementation deployed at:",
            address(payrollImplementation)
        );

        PayrollFactory factory = new PayrollFactory(
            address(payrollImplementation),
            hrAddress
        );
        console.log("PayrollFactory deployed at:", address(factory));
        console.log("HR (owner) address:", hrAddress);

        vm.stopBroadcast();
    }
}
