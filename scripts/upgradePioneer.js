const { ethers, upgrades } = require("hardhat");

async function main() {
  const PioneerNFT = await ethers.getContractFactory(
    "PioneerNFT"
  );
  console.log("Upgrading PioneerNFT...");
  await upgrades.upgradeProxy(
    "", // old address
    PioneerNFT
  );
  console.log("Upgraded Successfully");
}

main();