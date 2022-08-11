// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./StableCoinToken.sol";
import "./PriceConsumerV3.sol";

contract Vault is Ownable {
    event depositEvent(uint depositAmount, uint amountToMint);
    event withDrawEvent(uint amountToWithdraw, uint repaymentAmount);

    constructor(
        PriceConsumerV3 _priceconsumerV3,
        StableCoinToken _stableCoinToken
    ) {
        s_token = _stableCoinToken;
        s_oracle = _priceconsumerV3;
    }

    struct VaultStruct {
        uint256 debtAmount;
        uint256 collateralAmount;
    }

    mapping(address=>VaultStruct) public vaults;


    function getEthUSDPrice()public view returns(uint){
        uint256 price = uint256(s_oracle.getLatestPrice());
        return price;
    }

    function deposit(uint _depositAmount) external payable{
        require(_depositAmount==msg.value,"Incorrect ETH amount");
        uint amountToMint = _depositAmount * getEthUSDPrice();
        s_token.mint(msg.sender,amountToMint);
        vaults[msg.sender].collateralAmount+=_depositAmount;
        vaults[msg.sender].debtAmount+=amountToMint;
        emit(_depositAmount,amountToMint);
    }
    

    function withdraw(uint _withdrawAmount) external payable{
        require(_repaymentAmount<=vaults[msg.sender].debtAmount,"Limit Exceeded!!");
        require(s_token.balanceOf(msg.sender)>= _repaymentAmount,"Not enough token in Balance");
        uint256 amountToWithdraw = _repaymentAmount / getEthUSDPrice();
        s_token.burn(msg.sender,_repaymentAmount);
        vaults[msg.sender].collateralAmount -= amountToWithdraw;
        vaults[msg.sender].debtAmount -= _repaymentAmount;
        payable(msg.sender).transfer(amountToWithdraw);
        emit(amountToWithdraw,repaymentAmount);
    }

    function getVault(address userAddress) external view returns(address){
        return vaults[userAddress];
    }

    function estimateCollateralAmount(uint _repaymentAmount) external view returns (uint256 collateralAmount){
        return _repaymentAmount / getEthUSDPrice();
    }
    function estimateTokenAmount(uint256 _depositAmount)
    external
    view
    returns (uint256 tokenAmount)
  {
      return _depositAmount * getEthUSDPrice();
  }
}
