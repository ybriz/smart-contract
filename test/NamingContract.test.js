const { expect } = require("chai");

describe("NamingContract", () => {
  it("should return its name", async () => {
    const NamingContract = await ethers.getContractFactory("NamingContract");
    const namingContract = await NamingContract.deploy("Contract");

    await namingContract.deployed();
    expect(await namingContract.getName()).to.equal("Contract");
  });
  it("should change its name when requested", async () => {
    const NamingContract = await ethers.getContractFactory("NamingContract");
    const namingContract = await NamingContract.deploy("Contract");

    await namingContract.changeName("Another Contract");
    expect(await namingContract.getName()).to.equal("Another Contract");
  });
});
