async function main() {
    const NamingContract = await ethers.getContractFactory("NamingContract");
    const namingContract = await NamingContract.deploy("Contract");
  
    console.log("Contract deployed to:", namingContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
  });
  