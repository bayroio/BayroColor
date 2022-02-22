// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BayroColor is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Bayro Color", "BCLR") {}

    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}

// ******************* Polygon **************************
// TxHash: 0xb259d08afff713c5e210054e9a5bd2628b41cdf56cc1ca60fa60e72e20256f4f
// address: 0x0a8E409D14DfF5b68888dBf49df67985a3E7bf27
// https://mumbai.polygonscan.com/
// https://mumbai.polygonscan.com/address/0x0a8E409D14DfF5b68888dBf49df67985a3E7bf27

// ******************* Palm **************************
// TxHash: 0x42d7ee3997272e55330bb57640aac0eafab6822db32f7dc3acc5a57c1a0ba9c1
// address: 0x20B832B560FF5032a41D49b84c5480FE02D4b855
// https://explorer.palm-uat.xyz/
// https://explorer.palm-uat.xyz/address/0x20B832B560FF5032a41D49b84c5480FE02D4b855/transactions