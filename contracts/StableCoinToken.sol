// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StableCoinToken is ERC20{
    address private s_owner;
    modifier onlyOwner {
        require(s_owner==msg.sender,'Only Owner can call this function');
        _;
        
    }
    constructor (string memory _name,string memory _symbol)  ERC20(_name,_symbol){
        s_owner=msg.sender;
    }
    function mint(address account,uint amount) external onlyOwner returns (bool){
        _mint(account,amount);
        return true;
    }
    function burn(address account,uint amount) external onlyOwner returns (bool){
        _burn(account,amount);
        return true;
    }
    function setOwner(address newOwner) public onlyOwner{
        s_owner=newOwner;
    }
}

