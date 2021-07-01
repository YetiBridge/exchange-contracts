pragma solidity =0.5.16;

import '../PyroERC20.sol';

contract ERC20 is PyroERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
