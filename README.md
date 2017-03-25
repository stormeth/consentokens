# Tokens

This is a fork of

https://github.com/ConsenSys/Tokens

Remember you can not deploy
[abstract]
(http://solidity.readthedocs.io/en/develop/contracts.html#abstract-contracts)
contracts in Truffle like Token.
It took me awhile to figure out why Token would not deploy and I was
getting this error message with it...

```
Running migration: 2_deploy_contracts.js
  Deploying Token...
Error encountered, bailing. Network state unknown. Review successful transactions manually.
Error: Token error: contract binary not set. Can't deploy new instance.
    at Function.new (/tmp82/truffle/node_modules/truffle-contract/contract.js:324:15)
    at /tmp82/truffle/node_modules/truffle-migrate/node_modules/truffle-deployer/src/actions/deploy.js:25:29
    at process._tickCallback (internal/process/next_tick.js:103:7)
```

This repo contains Solidity smart contract code to issue simple, standards-compliant tokens on Ethereum. It can be used to create any form of asset, currency, coin, hours, usage tokens, vunk, etc.  

The default is StandardToken.sol which ONLY implements the core ERC20 standard functionality [#20](https://github.com/ethereum/EIPs/issues/20).  

HumanStandardToken.sol is an example of a token that has optional extras fit for your issuing your own tokens, to be mainly used by other humans. It includes:  

1. Initial Finite Supply (upon creation one specifies how much is minted).  
2. In the absence of a token registry: Optional Decimal, Symbol & Name.  
3. Optional approveAndCall() functionality to notify a contract if an approval() has occurred.  

There is a set of tests written for the HumanStandardToken.sol using the Truffle framework to do so.

Standards allows other contract developers to easily incorporate your token into their application (governance, exchanges, games, etc). It will be updated as often as possible.  

### Licensed under MIT.  

This code is licensed under MIT.
