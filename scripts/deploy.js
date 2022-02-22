async function main() {
    // Grab the contract factory 
    const BayroColor = await ethers.getContractFactory("BayroColor");
 
    // Start deployment, returning a promise that resolves to a contract object
    const bayroColor = await BayroColor.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", bayroColor.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });