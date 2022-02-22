require('dotenv').config();

const API_URL = process.env.POLYGON_MUMBAI_API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS_MUMBAI;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/BayroColor.sol/BayroColor.json");

//console.log(JSON.stringify(contract.abi));

const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
  
    //the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': 500000,
      'maxPriorityFeePerGas': 1999999987,
      'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    };
  
    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    
    console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
  }

  //mintNFT("https://gateway.pinata.cloud/ipfs/QmSWb8rAcPXKhXXuGDz9zsH2HxhNK3SWcoVTmDREXd5BPg");
  //mintNFT("https://gateway.pinata.cloud/ipfs/QmVYWmK5u7vvSLxHyLytJdEkDNciSEGKaJCYjWyfK1ygE5");
  mintNFT("https://gateway.pinata.cloud/ipfs/QmbA2gyUKpNG3wfZE6FtPbxH3kMV8B8m7MkXgUeA5CrrW1");
