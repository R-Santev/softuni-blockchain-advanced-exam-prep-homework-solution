const { ethers } = require("ethers");
const fs = require("fs");

// EIP-712 domain separator
const domain = {
  name: "Payroll IT",
  version: "1",
  chainId: 11155111, // Replace with actual chain ID
  verifyingContract: "0x25238Ef5ba7Ad48AA501D2bfCb687dE864D9aE00", // Replace with actual contract address
};

// EIP-712 types
const types = {
  PayStub: [
    { name: "employee", type: "address" },
    { name: "period", type: "uint256" },
    { name: "usdAmount", type: "uint256" },
  ],
};

async function generateSignature() {
  // Create a wallet with a private key (for testing purposes)
  const privateKey =
    "702cecd68f910348f7f77581430a49a2987622725ceb0a1be1ef570de1a0e816"; // Replace with actual private key
  const wallet = new ethers.Wallet(privateKey);

  // Create the message to sign
  const message = {
    employee: "0xF7Bd8400eb317dAc48cB72c350ED18e2F4826272",
    period: 202505,
    usdAmount: "1100", // 11 USD
  };

  // Sign the message
  const signature = await wallet.signTypedData(domain, types, message);

  // Create the signature object with stringified BigInt values
  const signatureData = {
    signature,
    message: {
      employee: message.employee,
      period: message.period.toString(),
      usdAmount: message.usdAmount.toString(),
    },
  };

  // Save signature to a file
  fs.writeFileSync("signature.json", JSON.stringify(signatureData, null, 2));

  console.log("Signature generated and saved to signature.json");
  console.log("Wallet address:", wallet.address);
  console.log("Signature:", signature);
}

generateSignature().catch(console.error);
