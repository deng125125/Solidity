const Setup = artifacts.require("Setup");

module.exports = function(deployer) {
  deployer.deploy(Setup, {value: "1050000000000000000000"});
};
