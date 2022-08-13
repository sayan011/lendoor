import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import hre from "hardhat";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { StableCoinToken, StableCoinToken__factory } from "../typechain-types";

describe("StableCoinToken", function () {
  let contract: StableCoinToken;

  beforeEach(async () => {
    const StableCoinToken = await ethers.getContractFactory("StableCoinToken");
    contract = await StableCoinToken.deploy("Stable Token", "STC");
  });
  describe("Minting", () => {
    it("Should Mint", async () => {
      await contract.deployed();
    });
  });
  describe("Minting", () => {
    it("Should Mint", async () => {
      await contract.deployed();
    });
  });
  describe("Minting", () => {
    it("Should Mint", async () => {
      await contract.deployed();
    });
  });
});
