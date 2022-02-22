# BayroColor
Writing, deploying and minting a Non Fungible (ERC721) Token smart contract using Alchemy+Mumbai, Palm and Inter Planetary File System (IPFS). 

An Alchemy (https://www.alchemy.com/) account is required.
Palm documentation: https://docs.palm.io/

npm install @alch/alchemy-web3
npm install --save-dev hardhat
npm install dotenv --save
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
npx hardhat compile
npx hardhat run scripts/deploy.js --network mumbai    or     npx hardhat run scripts/deploy.js --network palm_testnet

If you wnat mint on Mumbai, you need run: node scripts/mint-nft.js
If you want mint on Palm, run: npx hardhat run scripts/mint-nft-palm.js --network palm_testnet
