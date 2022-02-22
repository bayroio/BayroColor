/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = `0x${process.env.PRIVATE_KEY}`;
const CONTRACT_ADDRESS_PALM = process.env.CONTRACT_ADDRESS_PALM;

const contract = require("../artifacts/contracts/BayroColor.sol/BayroColor.json");
//const tokenURI = "https://gateway.pinata.cloud/ipfs/QmSWb8rAcPXKhXXuGDz9zsH2HxhNK3SWcoVTmDREXd5BPg";
//const tokenURI = "https://gateway.pinata.cloud/ipfs/QmVYWmK5u7vvSLxHyLytJdEkDNciSEGKaJCYjWyfK1ygE5"
const tokenURI = "https://gateway.pinata.cloud/ipfs/QmbA2gyUKpNG3wfZE6FtPbxH3kMV8B8m7MkXgUeA5CrrW1"

let provider = ethers.provider;
const wallet = new ethers.Wallet(PRIVATE_KEY);

wallet.provider = provider;
const signer = wallet.connect(provider);

const nftContract = new ethers.Contract(
  CONTRACT_ADDRESS_PALM,
  contract.abi,
  signer
);

const main = () => {
  console.log("Waiting 5 blocks for confirmation...");
  nftContract
    .mintNFT(PUBLIC_KEY, tokenURI)
    .then((tx) => tx.wait(5))
    .then((receipt) => console.log(`Your transaction is confirmed, its receipt is: ${receipt.transactionHash}`))

    .catch((e) => console.log("something went wrong", e));
};

main();