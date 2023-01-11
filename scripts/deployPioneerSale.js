const { ethers } = require("hardhat");

const { network, run } = require("hardhat");

async function verify(address, constructorArguments) {
  console.log(`verify  ${address} with arguments ${constructorArguments.join(',')}`)
  await run("verify:verify", {
    address,
    constructorArguments
  })
}


async function main() {

  const fundsWallet = " ";
  const marketing = " ";
  const merkleRoot = " "
  const tomi = " ";
  const usdt = " ";
  const usdc = " ";
  const pioneer = " ";
  const priceFeed = " ";




  const SalePioneer_ = await ethers.getContractFactory("SalePioneer");
  const SalePioneer = await SalePioneer_.deploy(
    60,
    2900,
    fundsWallet,
    marketing,
    merkleRoot,
    tomi,
    usdt,
    usdc,
    pioneer,
    priceFeed);
  await SalePioneer.deployed();

  console.log(`SalePioneer deployed to ${SalePioneer.address}`);

  
  await new Promise(resolve => setTimeout(resolve, 40000));
  verify(SalePioneer.address, [60, 2900, fundsWallet, marketing, merkleRoot, tomi, usdt, usdc, pioneer, priceFeed])
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
