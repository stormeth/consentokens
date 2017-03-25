
var Token = artifacts.require("./Token.sol");
var StandardToken = artifacts.require("./StandardToken.sol");
var HumanStandardToken = artifacts.require("./HumanStandardToken.sol")
var HumanStandardTokenFactory = artifacts.require("./HumanStandardTokenFactory.sol")
var SampleRecipientThrow = artifacts.require("./SampleRecipientThrow.sol");
var SampleRecipientSuccess = artifacts.require("./SampleRecipientSuccess.sol");
var TokenTester = artifacts.require("./TokenTester.sol");

// Remember you can NOT deploy abstract contracts like Token

module.exports = function(deployer) {
    deployer.deploy(HumanStandardToken);
    deployer.deploy(HumanStandardTokenFactory);
    deployer.deploy(SampleRecipientSuccess);
    deployer.deploy(TokenTester);
};
