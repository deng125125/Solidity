const Web3 = require('web3')
const rpcURL = "http://35.160.101.66:8545/4539cf65-3b33-4baf-ae26-0ecffadf90ba";
const web3 = new Web3(rpcURL);

const run = async () => {
    const block = await web3.eth.getBlock("latest");
    console.log("gasLimit: " + block.gasLimit);
}

run();

// gasLimit: 12500000