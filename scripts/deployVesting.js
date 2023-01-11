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

  const tomiAsProxy = " "
  const tomi1 = " "
  const tomi2 = " "

  const TomiVesting_ = await ethers.getContractFactory("TomiVesting");
  const TomiVesting = await TomiVesting_.deploy(tomi1, tomi2, tomiAsProxy);
  await TomiVesting.deployed();

  console.log(`TomiVesting deployed to ${TomiVesting.address}`);

  await new Promise(resolve => setTimeout(resolve, 10000));
  verify(TomiVesting.address, [tomi1, tomi2, tomiAsProxy]);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
