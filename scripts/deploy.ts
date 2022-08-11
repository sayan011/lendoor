
import '@nomiclabs/hardhat-ethers';
import {ethers} from "hardhat";

async function deploy(){
  //1. Get the contract factory
  const Vault = await ethers.getContractFactory("Vault");
  
  //2. It will create a json request, json-rpc request over to eth network, and the network will call a process to begin a transaction
  const vault = await Vault.deploy();
  
  //3. When the process before done, we will deployed the contract
  await hello.deployed();
  
  //4. All of the respnose will be returned. And named to hello variable
  return hello;
}

// @ts-ignore
async function sayHello(hello){
  //5. It will execute a function inside the contract, the `hello()` function literally the function that we create on our smart contract (requested out of the network)
  console.log("Say hello:", await hello.hello())
}

deploy().then(sayHello)