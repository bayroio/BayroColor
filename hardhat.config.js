/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { POLYGON_MUMBAI_API_URL, PALM_TESTNET_INFURA_PROJECT_ID, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.6",
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
         url: POLYGON_MUMBAI_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      palm_testnet: {
        url: PALM_TESTNET_INFURA_PROJECT_ID,
        accounts: [`0x${PRIVATE_KEY}`],
        gasPrice: 1000
    },
   },
}