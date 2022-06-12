const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers, network } = require("hardhat");
const contract = require("/Users/user/Desktop/hello-world/contracts/hello-world.sol");

//provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network ="ropsten", API_KEY);

//signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("updating the message ...");
    const tx = await helloWorldContract.update("This is the new Message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });