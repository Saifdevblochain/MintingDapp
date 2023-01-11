const { ethers, upgrades } = require("hardhat");

async function main() {
  const Tomi = await ethers.getContractFactory(
    "Tomi"
  );
  console.log("Upgrading Tomi...");
  await upgrades.upgradeProxy(
    "", // old address
    Tomi
  );
  console.log("Upgraded Successfully");
}

main();