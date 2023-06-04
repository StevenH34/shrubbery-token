
const hre = require("hardhat");

async function main() {
  const ShrubberyToken = await hre.ethers.getContractFactory("ShrubberyToken");
  const shrubberyToken = await ShrubberyToken.deploy(20000000, 50); // Total, Block reward

  await shrubberyToken.deployed();

  console.log("Shrubbery Token deployed: ", shrubberyToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
