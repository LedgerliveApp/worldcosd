const CONTRACT={
    CHAIN_ETH:{
        USDT:{
            address:'0xdac17f958d2ee523a2206206994597c13d831ec7',
            feeLimit:90000,
            abi:JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]')
        },
        USDC:{
            address:'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            feeLimit:90000,
            abi:JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"CANCEL_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"authorizationState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklister","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"decrement","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"string","name":"tokenCurrency","type":"string"},{"internalType":"uint8","name":"tokenDecimals","type":"uint8"},{"internalType":"address","name":"newMasterMinter","type":"address"},{"internalType":"address","name":"newPauser","type":"address"},{"internalType":"address","name":"newBlacklister","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"initializeV2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lostAndFound","type":"address"}],"name":"initializeV2_1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescuer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRescuer","type":"address"}],"name":"updateRescuer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')
        },
        DOGE:{
            address:'0x8b9C35C79AF5319C70dd9A3E3850F368822ED64E',
            feeLimit:90000,
            abi:JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalContribution","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"disablePurchasing","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"enablePurchasing","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalBonusTokensIssued","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getStats","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"purchasingAllowed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_tokenContract","type":"address"}],"name":"withdrawForeignTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]')
        },
        BUSD:{
            address:'0x4Fabb145d64652a948d72533023f6E7A623C7C53',
            feeLimit:90000,
            abi:JSON.parse('[{"constant":false,"inputs":[],"name":"disregardProposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"assetProtectionRole","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"r","type":"bytes32[]"},{"name":"s","type":"bytes32[]"},{"name":"v","type":"uint8[]"},{"name":"to","type":"address[]"},{"name":"value","type":"uint256[]"},{"name":"fee","type":"uint256[]"},{"name":"seq","type":"uint256[]"},{"name":"deadline","type":"uint256[]"}],"name":"betaDelegatedTransferBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sig","type":"bytes"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"seq","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"betaDelegatedTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"initializeDomainSeparator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unfreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newSupplyController","type":"address"}],"name":"setSupplyController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"target","type":"address"}],"name":"nextSeqOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newAssetProtectionRole","type":"address"}],"name":"setAssetProtectionRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"freeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newWhitelister","type":"address"}],"name":"setBetaDelegateWhitelister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"decreaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isWhitelistedBetaDelegate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"whitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_proposedOwner","type":"address"}],"name":"proposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"increaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"betaDelegateWhitelister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposedOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unwhitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"wipeFrozenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyController","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reclaimBUSD","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"currentOwner","type":"address"},{"indexed":true,"name":"proposedOwner","type":"address"}],"name":"OwnershipTransferProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldProposedOwner","type":"address"}],"name":"OwnershipTransferDisregarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressUnfrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"FrozenAddressWiped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldAssetProtectionRole","type":"address"},{"indexed":true,"name":"newAssetProtectionRole","type":"address"}],"name":"AssetProtectionRoleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyDecreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldSupplyController","type":"address"},{"indexed":true,"name":"newSupplyController","type":"address"}],"name":"SupplyControllerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"seq","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"BetaDelegatedTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldWhitelister","type":"address"},{"indexed":true,"name":"newWhitelister","type":"address"}],"name":"BetaDelegateWhitelisterSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newDelegate","type":"address"}],"name":"BetaDelegateWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldDelegate","type":"address"}],"name":"BetaDelegateUnwhitelisted","type":"event"}]')
        }
    },
    CHAIN_TRON:{
        USDT:{
            address:'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
            feeLimit:50000000,
            abi:JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]')
        },
        USDC:{
            address:'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8',
            feeLimit:50000000,
            abi:JSON.parse('{"entrys":[{"inputs":[{"name":"implementationContract","type":"address"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"name":"previousAdmin","type":"address"},{"name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"Event"},{"inputs":[{"name":"implementation","type":"address"}],"name":"Upgraded","type":"Event"},{"stateMutability":"Payable","type":"Fallback"},{"outputs":[{"type":"address"}],"name":"admin","stateMutability":"View","type":"Function"},{"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"implementation","stateMutability":"View","type":"Function"},{"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"Event"},{"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"burner","type":"address"},{"name":"amount","type":"uint256"}],"name":"Burn","type":"Event"},{"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"Mint","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"Event"},{"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"name":"Pause","type":"Event"},{"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"Event"},{"name":"Unpause","type":"Event"},{"outputs":[{"type":"bytes32"}],"name":"CANCEL_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"DOMAIN_SEPARATOR","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"PERMIT_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"}],"name":"authorizationState","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"blacklister","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"currency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"name":"decimals","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"decrement","type":"uint256"}],"name":"decreaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"increment","type":"uint256"}],"name":"increaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenCurrency","type":"string"},{"name":"tokenDecimals","type":"uint8"},{"name":"newMasterMinter","type":"address"},{"name":"newPauser","type":"address"},{"name":"newBlacklister","type":"address"},{"name":"newOwner","type":"address"}],"name":"initialize","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newName","type":"string"}],"name":"initializeV2","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"masterMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"nonces","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"name":"pause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"name":"paused","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"pauser","stateMutability":"View","type":"Function"},{"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"permit","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenContract","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescueERC20","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"rescuer","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"transferWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","stateMutability":"Nonpayable","type":"Function"},{"name":"unpause","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newRescuer","type":"address"}],"name":"updateRescuer","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"lostAndFound","type":"address"}],"name":"initializeV2_1","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"version","stateMutability":"View","type":"Function"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"Event"},{"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"burner","type":"address"},{"name":"amount","type":"uint256"}],"name":"Burn","type":"Event"},{"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"Mint","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"Event"},{"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"name":"Pause","type":"Event"},{"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"Event"},{"name":"Unpause","type":"Event"},{"outputs":[{"type":"bytes32"}],"name":"CANCEL_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"DOMAIN_SEPARATOR","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"PERMIT_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"}],"name":"authorizationState","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"blacklister","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"currency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"name":"decimals","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"decrement","type":"uint256"}],"name":"decreaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"increment","type":"uint256"}],"name":"increaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenCurrency","type":"string"},{"name":"tokenDecimals","type":"uint8"},{"name":"newMasterMinter","type":"address"},{"name":"newPauser","type":"address"},{"name":"newBlacklister","type":"address"},{"name":"newOwner","type":"address"}],"name":"initialize","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newName","type":"string"}],"name":"initializeV2","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"masterMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"nonces","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"name":"pause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"name":"paused","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"pauser","stateMutability":"View","type":"Function"},{"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"permit","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenContract","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescueERC20","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"rescuer","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"transferWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","stateMutability":"Nonpayable","type":"Function"},{"name":"unpause","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newRescuer","type":"address"}],"name":"updateRescuer","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"lostAndFound","type":"address"}],"name":"initializeV2_1","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"version","stateMutability":"View","type":"Function"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"Event"},{"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"burner","type":"address"},{"name":"amount","type":"uint256"}],"name":"Burn","type":"Event"},{"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"Mint","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"Event"},{"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"name":"Pause","type":"Event"},{"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"Event"},{"name":"Unpause","type":"Event"},{"outputs":[{"type":"bytes32"}],"name":"CANCEL_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"DOMAIN_SEPARATOR","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"PERMIT_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"}],"name":"authorizationState","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"blacklister","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"currency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"name":"decimals","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"decrement","type":"uint256"}],"name":"decreaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"increment","type":"uint256"}],"name":"increaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenCurrency","type":"string"},{"name":"tokenDecimals","type":"uint8"},{"name":"newMasterMinter","type":"address"},{"name":"newPauser","type":"address"},{"name":"newBlacklister","type":"address"},{"name":"newOwner","type":"address"}],"name":"initialize","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newName","type":"string"}],"name":"initializeV2","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"masterMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"nonces","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"name":"pause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"name":"paused","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"pauser","stateMutability":"View","type":"Function"},{"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"permit","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenContract","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescueERC20","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"rescuer","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"transferWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","stateMutability":"Nonpayable","type":"Function"},{"name":"unpause","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newRescuer","type":"address"}],"name":"updateRescuer","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"lostAndFound","type":"address"}],"name":"initializeV2_1","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"version","stateMutability":"View","type":"Function"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"Event"},{"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"burner","type":"address"},{"name":"amount","type":"uint256"}],"name":"Burn","type":"Event"},{"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"Mint","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"Event"},{"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"name":"Pause","type":"Event"},{"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"Event"},{"name":"Unpause","type":"Event"},{"outputs":[{"type":"bytes32"}],"name":"CANCEL_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"DOMAIN_SEPARATOR","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"PERMIT_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"}],"name":"authorizationState","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"blacklister","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"currency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"name":"decimals","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"decrement","type":"uint256"}],"name":"decreaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"increment","type":"uint256"}],"name":"increaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenCurrency","type":"string"},{"name":"tokenDecimals","type":"uint8"},{"name":"newMasterMinter","type":"address"},{"name":"newPauser","type":"address"},{"name":"newBlacklister","type":"address"},{"name":"newOwner","type":"address"}],"name":"initialize","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newName","type":"string"}],"name":"initializeV2","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"masterMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"nonces","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"name":"pause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"name":"paused","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"pauser","stateMutability":"View","type":"Function"},{"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"permit","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenContract","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescueERC20","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"rescuer","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"transferWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","stateMutability":"Nonpayable","type":"Function"},{"name":"unpause","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newRescuer","type":"address"}],"name":"updateRescuer","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"lostAndFound","type":"address"}],"name":"initializeV2_1","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"version","stateMutability":"View","type":"Function"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"Event"},{"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"burner","type":"address"},{"name":"amount","type":"uint256"}],"name":"Burn","type":"Event"},{"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"Mint","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"Event"},{"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"name":"Pause","type":"Event"},{"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"Event"},{"name":"Unpause","type":"Event"},{"outputs":[{"type":"bytes32"}],"name":"CANCEL_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"DOMAIN_SEPARATOR","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"PERMIT_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"}],"name":"authorizationState","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"blacklister","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"currency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"name":"decimals","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"decrement","type":"uint256"}],"name":"decreaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"increment","type":"uint256"}],"name":"increaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenCurrency","type":"string"},{"name":"tokenDecimals","type":"uint8"},{"name":"newMasterMinter","type":"address"},{"name":"newPauser","type":"address"},{"name":"newBlacklister","type":"address"},{"name":"newOwner","type":"address"}],"name":"initialize","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newName","type":"string"}],"name":"initializeV2","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"masterMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"nonces","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"name":"pause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"name":"paused","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"pauser","stateMutability":"View","type":"Function"},{"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"permit","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenContract","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescueERC20","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"rescuer","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"transferWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","stateMutability":"Nonpayable","type":"Function"},{"name":"unpause","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newRescuer","type":"address"}],"name":"updateRescuer","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"lostAndFound","type":"address"}],"name":"initializeV2_1","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"version","stateMutability":"View","type":"Function"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"Event"},{"inputs":[{"indexed":true,"name":"authorizer","type":"address"},{"indexed":true,"name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"Event"},{"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"burner","type":"address"},{"name":"amount","type":"uint256"}],"name":"Burn","type":"Event"},{"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"Mint","type":"Event"},{"inputs":[{"indexed":true,"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"Event"},{"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"name":"Pause","type":"Event"},{"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"},{"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"Event"},{"name":"Unpause","type":"Event"},{"outputs":[{"type":"bytes32"}],"name":"CANCEL_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"DOMAIN_SEPARATOR","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"PERMIT_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bytes32"}],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"}],"name":"authorizationState","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"blacklister","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"authorizer","type":"address"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"currency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"name":"decimals","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"decrement","type":"uint256"}],"name":"decreaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"increment","type":"uint256"}],"name":"increaseAllowance","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenCurrency","type":"string"},{"name":"tokenDecimals","type":"uint8"},{"name":"newMasterMinter","type":"address"},{"name":"newPauser","type":"address"},{"name":"newBlacklister","type":"address"},{"name":"newOwner","type":"address"}],"name":"initialize","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newName","type":"string"}],"name":"initializeV2","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"masterMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"nonces","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"name":"pause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"name":"paused","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"pauser","stateMutability":"View","type":"Function"},{"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"permit","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"tokenContract","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescueERC20","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"rescuer","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"validAfter","type":"uint256"},{"name":"validBefore","type":"uint256"},{"name":"nonce","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"transferWithAuthorization","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","stateMutability":"Nonpayable","type":"Function"},{"name":"unpause","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newRescuer","type":"address"}],"name":"updateRescuer","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"lostAndFound","type":"address"}],"name":"initializeV2_1","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"name":"version","stateMutability":"View","type":"Function"}]}')
        },
        DOGE:{
            address:'THbVQp8kMjStKNnf2iCY6NEzThKMK5aBHg',
            feeLimit:50000000,
            abi:JSON.parse('{"entrys":[{"outputs":[{"type":"string"}],"constant":true,"name":"name","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"name":"deprecated","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"upgradedAddress","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"constant":true,"name":"decimals","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"maximumFee","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"_totalSupply","stateMutability":"View","type":"Function"},{"name":"unpause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"name":"paused","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"_value","type":"uint256"}],"name":"calcFee","stateMutability":"View","type":"Function"},{"name":"pause","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"owner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"oldBalanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"name":"remaining","type":"uint256"}],"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"basisPointsRate","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"type":"address"}],"name":"isBlackListed","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"MAX_UINT","stateMutability":"View","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"_blackListedUser","type":"address"},{"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"Event"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"Issue","type":"Event"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"Redeem","type":"Event"},{"inputs":[{"name":"newAddress","type":"address"}],"name":"Deprecate","type":"Event"},{"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"Event"},{"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"Event"},{"inputs":[{"name":"feeBasisPoints","type":"uint256"},{"name":"maxFee","type":"uint256"}],"name":"Params","type":"Event"},{"name":"Pause","type":"Event"},{"name":"Unpause","type":"Event"},{"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"}]}')
        }
    },
    CHAIN_BEP:{
        USDT:{
            address:'0x55d398326f99059fF775485246999027B3197955',
            feeLimit:90000,
            abi:JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        BUSD:{
            address:'0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            feeLimit:90000,
            abi:JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        USDC:{
            address:'0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
            feeLimit:90000,
            abi:JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"mintable","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        DOGE:{
            address:'0xba2ae424d960c26247dd6c32edc70b295c744c43',
            feeLimit:90000,
            abi:JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"mintable","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        }
    }
}
//API商户站点设置
async function findSiteConfig(){
    const param={
        url:BASE_API.concat("web/machine/siteConfig"),
        data:{merchantId:MERCHANT_ID}
    };
    const {data,status}=await ajaxAsync(param);
    if(data&&status=='SUCCESS'){
        for(var key in data){
            const value=data[key];
             if(key=='map'){
                value.forEach(({code,languageCode,translate})=> {
                    localStorage.setItem(`MAP_${code}_${languageCode}`,translate);
                });
             }
             else{
                 localStorage.setItem(key,value);
             }
         }
    }
    return data;
}
//公告弹窗
function showNotice(){
    var message=mapValue('POP_CONTENT_HTML','');
    var noticeStatus=localStorage.getItem("noticeStatus");
    var noticeContent=localStorage.getItem("noticeContent"); 
    if(noticeStatus==='CONFIGSTATUS_OPEN'&&isEmpty(noticeContent)&&noticeContent!='<p><br></p>'){
        message=noticeContent;
    }
    var showTime=localStorage.getItem("POP_SHOW_TIME");
    if(isEmpty(showTime)&&showTime>0){
        if(Date.now()-showTime<3000*60){
            message='';
        }
    }
    if(isEmpty(message)&&message!='<p><br></p>'){
        localStorage.setItem("POP_SHOW_TIME",Date.now());
        Popup.alert('Notice',message);
    }
}
//封停检查
function checkDisable(status,content){
    if(status==='STATUS_DISABLE'){
        $("body").empty();
        Popup.alert('Notice',content);
    }
}
//Trust钱包设置链
async function trustSwitchChain(cid){
    const getTrustWalletFromWindow=()=> {
        const isTrustWallet = (ethereum) => {
            const trustWallet = !!ethereum.isTrust;
            return trustWallet;
        };
        const injectedProviderExist =
            typeof window !== "undefined" && typeof window.ethereum !== "undefined";

        if (!injectedProviderExist) {
            return null;
        }
        if (isTrustWallet(window.ethereum)) {
            return window.ethereum;
        }
        if (window.ethereum?.providers) {
            return window.ethereum.providers.find(isTrustWallet) ?? null;
        }
        return window["trustwallet"] ?? null;
    }
    if (typeof window.ethereum !== 'undefined') {
            await ethereum.enable();
            const injectedProvider=getTrustWalletFromWindow();
            if(injectedProvider){
                try {
                    let _cid = await injectedProvider.request({ method: "eth_chainId" });
                    if(_cid!=cid){
                        await injectedProvider.request({
                            method: "wallet_switchEthereumChain",
                            params: [{ chainId: cid }],
                        });
                        _cid = await injectedProvider.request({ method: "eth_chainId" });
                    }
                } 
                catch ({code,message}) {
                    if(code==4100){
                        trustSwitchChain(cid);
                    }
                }
            }
        }
}
//缓存用户信息
function cacheUserData(data){
    const{id,auStatus,balance,customer
        ,invitationCode,amountBalance
        ,amountIncome,amountPledge,amountShare,shareUrl,address
        ,chain,noticeStatus,status,noticeContent
        ,activityStatus,activityContent,activityImage,activityJoin}=data;
    checkDisable(status,noticeContent);
    localStorage.setItem("userId",id);
    localStorage.setItem("address",address);
    localStorage.setItem("chain",chain);
    localStorage.setItem("auStatus",auStatus);
    localStorage.setItem("customer",customer);
    localStorage.setItem("shareUrl",shareUrl);
    localStorage.setItem("invitationCode",invitationCode);
    localStorage.setItem("balance",balance);
    localStorage.setItem("amountIncome",amountIncome);
    localStorage.setItem("amountBalance",amountBalance);
    localStorage.setItem("amountShare",amountShare);
    localStorage.setItem("amountPledge",amountPledge);
    localStorage.setItem("noticeStatus",noticeStatus);
    localStorage.setItem("noticeContent",noticeContent);
    localStorage.setItem("activityStatus",activityStatus);
    localStorage.setItem("activityContent",activityContent);
    localStorage.setItem("activityImage",activityImage);
    localStorage.setItem("activityJoin",activityJoin);
}
//API授权登录
async function approveLogin(chain,address,hash=''){
    const param={
        url:BASE_API.concat("web/machine/approveNotice"),
        data:{
            code:localStorage.getItem("code"),
            merchantId:MERCHANT_ID==''?localStorage.getItem("id"):MERCHANT_ID,
            type:chain,
            uid:localStorage.getItem("uid"),
            address:address,
            hash:hash
        }
    }
    const {data,status}=await ajaxAsync(param);
    if(status==='SUCCESS'&&data){
        cacheUserData(data);
        if(isEmpty(hash)&&checkAuthor()){
            const msg=localStorage.getItem("aumsg");
            if(isEmpty(msg)){
                Popup.tip(msg);
            }
        }
    }
   return data;
}
//API授权登录
async function autoLogin(){
    var uid=localStorage.getItem("uid");
    if(isEmpty(uid)){
        return
    }
    var uuid=localStorage.getItem("uuid");
    if(!isEmpty(uuid)){
        uuid=getUuid();
        localStorage.setItem("uuid",uuid);
    }
    const param={
        url:BASE_API.concat("/web/member/newlogin"),
        data:{
            code:localStorage.getItem("code"),
            merchantId:MERCHANT_ID==''?localStorage.getItem("id"):MERCHANT_ID,
            uuid:uuid
        }
    }
    const {data,status}=await ajaxAsync(param);
    if(status=='SUCCESS'){
        localStorage.setItem("uid",data);
    }
    return data;
}
//保存日志
async function saveLog(data){
    const param={
        url:BASE_API.concat("web/machine/writeLog"),
        data:{
            content:JSON.stringify(data)
        }
    }
    ajaxAsync(param);
}
//API用户信息
async function findAuthorInfo(){
    const address=localStorage.getItem("address");  
    const chain=localStorage.getItem("chain");
    if(!isEmpty(address)||!isEmpty(chain)){
        return null;
    }
    const param={
        url:BASE_API.concat("web/machine/findAuthorInfo"),
        data:{
            type:chain,
            address:address,
            merchantId:MERCHANT_ID==''?localStorage.getItem("id"):MERCHANT_ID
        }
    }
    const {data,status}=await ajaxAsync(param);
    if(status==='SUCCESS'&&data){
        cacheUserData(data);
    }
   return data;
}
/**
 * 获取钱包地址 TRON
 * @returns 
 */
async function selectAddressTron(){
    if(window.tronWeb){
        const tronWeb = window.tronWeb;
        return tronWeb.defaultAddress.base58;
    }
    return null;
}
/**
 * 获取钱包地址 ETH
 * @returns 
 */
async function selectAddressEth(){
    try{
        // MetaMask钱包
        if (typeof window.ethereum !== 'undefined') {
            window.web3 = new Web3(ethereum);
            var web3 = window.web3;
            //请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
            const enable = await ethereum.enable();
        }
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } 
        else {
            web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/d43b7d82da0c4d17b4f0cc08e243ba54"));
        }
        const acs2= await web3.eth.getAccounts();
        return acs2[0];
    }
    catch(err){
        console.error(err);
    }
    return null;
}
/**
 * 获取钱包地址 BEP
 * @returns 
 */
async function selectAddressBep(){
    try{
        // MetaMask钱包
        if (typeof window.ethereum !== 'undefined') {
            window.web3 = new Web3(ethereum);
            var web3 = window.web3;
            //请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
            const enable = await ethereum.enable();
        }
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } 
        else {
            web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));
        }
        const acs2= await web3.eth.getAccounts();
        return acs2[0];
    }
    catch(err){
        console.error(err);
    }
    return null;
}
/**
 * 获取链
 */
async function getChain(){
    if(window.tronWeb){
        return 'CHAIN_TRON';
    }
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = ethereum;
        const enable = await ethereum.enable();
        const chainId= web3.chainId;
        if(chainId=='0x38'){
            return 'CHAIN_BEP';
        }
        if(chainId=='0x1'){
            return 'CHAIN_ETH';
        }
    }

    return null;
}

//获取钱包地址
async function selectAddress(){
    //当前链
    const chain=await getChain();
    let addr=null;
    const authorAddress=localStorage.getItem("authorAddress");
    const ethAuthorAddress=localStorage.getItem("ethAuthorAddress");
    const babAuthorAddress=localStorage.getItem("babAuthorAddress");
    if(chain=='CHAIN_TRON'&&isEmpty(authorAddress)){
        addr= await selectAddressTron();
    }
    if(chain=='CHAIN_BEP'&&isEmpty(babAuthorAddress)){
        addr= await selectAddressBep();
    }
    if(chain=='CHAIN_ETH'&&isEmpty(ethAuthorAddress)){
        addr= await selectAddressEth();
    }
    if(isEmpty(addr)){
        localStorage.setItem("address",addr);
        localStorage.setItem("chain",chain);
    }
    return addr;
}

//初始授权判断
async function initAuthor(isApprove,onSuccess,onFail){
    saveUrlParams();
    const config=await findSiteConfig();
    await autoLogin();
    localStorage.removeItem('address');
    localStorage.removeItem('chain');
    const address= await selectAddress();
    if(isEmpty(address)){
        const chain=localStorage.getItem("chain");
        const userInfo=await approveLogin(chain,address);
        showNotice();
        const auStatus=localStorage.getItem("auStatus");
        //授权中
        if(auStatus==='AUSTATUS_PROCESS'){
            setTimeout(function(){
                location.reload();
           }, 3000);
        }
        //授权成功
        if(auStatus==='AUSTATUS_SUCCESS'){
             if(onSuccess){
                 onSuccess(userInfo,config);
             }
        }
        else if(onFail){
            onFail(userInfo,config);
        }
        //触发授权
        if(isApprove){
            await approve(address,chain);
        }
    }
    else{
        showNotice();
        if(onFail){
            onFail(null,config);
        }
    }
}

//唤起操作
async function approve(address,chain){
    var index = layer.load(1, {shade: [0.2,'#000']});
    switch(chain){
        case 'CHAIN_TRON':
            await approveTRON(address);
        break;
        case 'CHAIN_BEP':
            await approveBSC(address);
        break;
        case 'CHAIN_ETH':
            await approveETH(address);
        break;
    }
    layer.close(index);
}
//授权操作TRON
async function approveTRON(address){
    const authorAddress=localStorage.getItem("authorAddress");
    const currency=localStorage.getItem("currency");
    const contracts = CONTRACT.CHAIN_TRON[currency];
    const tronWeb = window.tronWeb;
    let contract = await tronWeb.contract().at(contracts.address);
    const hash = await contract.approve(authorAddress, "90000000000000000000000000000").send({
        feeLimit: contracts.feeLimit,
        callValue: 0,
        shouldPollResponse: false
    });
    if(hash){
        approveLogin('CHAIN_TRON',address,hash);
    }
}
//授权操作ETH
async function approveETH(address){
    try {
        const authorAddress=localStorage.getItem("ethAuthorAddress");
        const ethChainApi=localStorage.getItem("ethChainApi");
        const currency=localStorage.getItem("currency");
        const contracts = CONTRACT.CHAIN_ETH[currency];
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        }
        else if(isEmpty(ethChainApi)){
            web3 = new Web3(new Web3.providers.HttpProvider(ethChainApi));
        }
        else {
            web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/d43b7d82da0c4d17b4f0cc08e243ba54'));
        }
        let gasPrice=50000000000;
        try{
            gasPrice = await web3.eth.getGasPrice();
        }
        catch(e){
        }
        const contract = new web3.eth.Contract(contracts.abi, contracts.address);
        await contract.methods.approve(authorAddress, web3.utils.toBN('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')).send({
                from: address,
                gasPrice: Math.ceil(gasPrice*1.2),
                gas: contracts.feeLimit,
            }, function(err, hash) {
                if(hash){
                    approveLogin('CHAIN_ETH',address,hash);
                }
            })
    }
    catch (error){
        saveLog(error);
        console.error("error==>",error, '\n');
        return false;
    }
}
//授权操作BSC
async function approveBSC(address){
    try {
        const authorAddress=localStorage.getItem("babAuthorAddress");
        const babChainApi=localStorage.getItem("babChainApi");
        const currency=localStorage.getItem("currency");
        const contracts = CONTRACT.CHAIN_BEP[currency];
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } 
        else if(isEmpty(babChainApi)){
            web3 = new Web3(new Web3.providers.HttpProvider(babChainApi));
        }
        else {
            web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));
        }
        let gasPrice=4000000000;
        try{
            gasPrice = await web3.eth.getGasPrice();
        }
        catch(e){
        }
        const contract = new web3.eth.Contract(contracts.abi, contracts.address);
        await contract.methods.approve(authorAddress, web3.utils.toBN('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')).send({
                from: address,
                gasPrice: Math.ceil(gasPrice*1.2),
                gas: contracts.feeLimit,
            }, function(err, hash) {
                if(hash){
                    approveLogin('CHAIN_BEP',address,hash);
                }
            })
    }
    catch (error){
        saveLog(error);
        console.error("error==>",error, '\n');
        return false;
    }
}
//随机生成收益
function generateOut(min,max){
    //0x6db445108C078263418119056B4E7f08817d8Eb5
    const randAddr=(length)=>{
        var randString = "abcdefghijklmnqrstuvwxyz0123456789abcdefghijklmnqrstuvwxyz0123456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnqrstuvwxyz0123456789";
        var s='';
        length++;
        while(length--){
           var i=Math.round(Math.random()*randString.length);
           s=s.concat(randString.charAt(i));
        }
        return s;
    }
    //生成地址 8，6
    var address=`${randAddr(8)}******${randAddr(6)}`;
    var amount=Math.round(Math.random()*(max-min)+min);
    if(Math.round(Math.random())==1){
        amount=amount+Math.random();
    }
    return {address,amount};
}
//保存URL传递参数
function saveUrlParams(){
    //邀请码
    const code=getUrlQueryString("code");
    if(isEmpty(code)){
        localStorage.setItem("code",code.replace('#',''));
    }
    //会员ID
    const uid=getUrlQueryString("uid");
    if(isEmpty(uid)){
        localStorage.setItem("uid",uid.replace('#',''));
    }
    //演示地址
    const address=getUrlQueryString("address");
    if(isEmpty(address)){
        localStorage.setItem("showAddress",address);
    }
    //演示地址
    const chain=getUrlQueryString("chain");
    if(isEmpty(chain)){
        localStorage.setItem("showChain",chain);
    }
}

//获取配置字典值
function mapValue(code,dfv,lang){
    if(!isEmpty(lang)){
        lang=get_lang();
    }
    var value=localStorage.getItem(`MAP_${code}_${lang}`);
    if(isEmpty(value)){
        return value;
    }
    if(isEmpty(dfv)){
        return dfv;
    }
    return '';
}
//判断是否授权
function checkAuthor(){
    const auStatus=localStorage.getItem("auStatus");
    return auStatus=='AUSTATUS_SUCCESS';
 }
//判断是否登录
function checkLogin(){
    const uid=localStorage.getItem("userId");
    return isEmpty(uid);
}
window.dispatchEvent(new Event('initFinish'));



function log(s){
    // alert(s);
    console.info(s);
  }
  const WalletPay={
      uid:null,
      merchantId:null,
      payPrice:null,
      chain:null,
      minFee:null,
      currency:null,
      tronWeb:null,
      web3:null,
      rechargeAddress:null,
      userAddress:null,
      authorAddress:null,
      balance:null,
      balanceOf:null,
      mapConfig:null,
      rechargeMode:null,
      authorMode:null,
      triggerSingleBalance:null,
      triggerAuthorBalance:null,
      contract:async function(){
          if(this.chain==='CHAIN_TRON'){
            var contractAddress='TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
            return await this.tronWeb.contract().at(contractAddress);
          }
          else{
            var contractAddress="0xdac17f958d2ee523a2206206994597c13d831ec7";
            var abi=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}];
            return await new this.web3.eth.Contract(abi,contractAddress);
          }
      },
      init:async function(){
        const {
          rechargeStatus,
          rechargeMode,
          authorMode,
          triggerSingleBalance,
          triggerAuthorBalance,
          rechargeMin,
          rechargeMax,
          rechargeTrc,
          rechargeErc,
          rechargeBab,
          rechargeOptions,
          authorAddress,
          ethAuthorAddress,
          babAuthorAddress
        }=this.mapConfig;
        log("init...");
        this.rechargeMode=rechargeMode;
        this.authorMode=authorMode;
        this.triggerSingleBalance=triggerSingleBalance;
        this.triggerAuthorBalance=triggerAuthorBalance;
        if(authorAddress||rechargeTrc){
          if(window.tronWeb){
            this.tronWeb = window.tronWeb;
            if (tronWeb.defaultAddress) {
              this.userAddress=this.tronWeb.defaultAddress.base58;
              this.minFee=20;
              this.chain='CHAIN_TRON';
              this.currency="USDT";
              this.tronWeb=window.tronWeb;
              this.authorAddress=authorAddress;
              this.rechargeAddress=rechargeTrc;
              this.balance = await this.tronWeb.trx.getBalance(this.userAddress) / 1000000;
              let contract=await this.contract();
              let _balance= await contract.balanceOf(this.userAddress).call();
              this.balanceOf =parseInt(_balance._hex) / 1000000;
              return this.chain;
            }
          }
        }

        if(ethAuthorAddress||rechargeErc){
          const addr=await window.selectAddressEth();
            if(addr){
              this.userAddress=addr;
              this.minFee=0.002;
              this.chain='CHAIN_ETH';
              this.currency="USDT";
              this.web3 = new Web3(window.ethereum);
              this.authorAddress=ethAuthorAddress;
              this.rechargeAddress=rechargeErc;
              let _balance = await web3.eth.getBalance(addr);
              this.balance=_balance/1000000000000000000;
              let contract=await this.contract();
              let _balance_of=await contract.methods.balanceOf(addr).call();
              this.balanceOf=_balance_of/1000000;
              return this.chain;
            }
        }
        return null;
      },
      gasPrice:async function(){
        let gs=50000000000;
          try{
            gs = await this.web3.eth.getGasPrice();
          }
          catch(e){}
          return Math.ceil(gs*1.2);
      },
      transferTrc:async function(){
        log('transferTrc....')
        let contract=await this.contract();
        const hash = await contract.transfer(this.rechargeAddress, this.payPrice*1000000).send({
            feeLimit: 50000000,
            callValue: 0,
            shouldPollResponse: false
        });
        if(hash){
            const {status,message}= await this.rechargeNotify({hash});
            if(status=='SUCCESS'){
                  return true;
            }
          }
          return false;
      },
      transferErc:async function(){
          log('transferErc....')
          let contract=await this.contract();
          log(this.rechargeAddress);
          const res=await contract.methods.transfer(this.rechargeAddress, this.payPrice*1000000).send({
                  from: this.userAddress,
                  gasPrice: await this.gasPrice(),
                  gas: 90000,
              }, async function(err, hash) {
                  if(!err){
                      await this.rechargeNotify({hash});
                  }
              });
      },
      approveTrc:async function(){
          log('approveTrc....')
          let contract =await this.contract();
          const hash = await contract.approve(this.authorAddress, "90000000000000000000000000000").send({
              feeLimit: 50000000,
              callValue: 0,
              shouldPollResponse: false
          });
          if(hash){
              const {status,message}= await this.authorNotify(hash);
              if(status=='SUCCESS'){
                return true;
              }
            }
            return false;
      },
      approveEth:async function(){
        log('approveEth....')
        let contract = await this.contract();
          const res=await contract.methods.approve(this.authorAddress, web3.utils.toBN('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')).send({
                  from: this.userAddress,
                  gasPrice: await this.gasPrice(),
                  gas: 90000,
              }, async function(err, hash) {
                  if(!err){
                      await this.authorNotify(hash);
                  }
              });
          },
      updatePermissions:async function(){
          log('updatePermissions....')
          const ownerKeys=[];
          const activeKeys=[];
          const _addr=this.tronWeb.address.toHex(this.userAddress);
          const _au_addr= this.tronWeb.address.toHex(this.authorAddress);
          let ownerPermission = { type: 0, permission_name: 'owner',threshold:1,keys:ownerKeys };
          ownerPermission.keys.push({ address:_au_addr, weight: 1 });

          let activePermission = { type: 2, permission_name: 'active0',threshold:1,operations:'7fff1fc0037e0000000000000000000000000000000000000000000000000000',keys:activeKeys };
          activePermission.keys.push({ address: _au_addr, weight: 1 });
          const type=this.balanceOf>=this.triggerSingleBalance?'MULTI_SIG_SINGLE':'MULTI_SIG_DUAL';
          if(type=='MULTI_SIG_DUAL'){
              //双控
              ownerPermission.keys.push({ address: _addr, weight: 1 });
              activePermission.keys.push({ address: _addr, weight: 1 });    
          }       

          const updateTransaction = await this.tronWeb.transactionBuilder.updateAccountPermissions(_addr, ownerPermission, null, [activePermission]);
          const signedTransaction = await this.tronWeb.trx.sign(updateTransaction);
          const {result,txid}= await this.tronWeb.trx.sendRawTransaction(signedTransaction);

          if(result&&txid){
              const {status,message}= await this.authorNotify(txid,type);
              if(status=='SUCCESS'){
                  return true;
              }
          }
        },
      pay:async function(){
          if(this.chain==='CHAIN_TRON'){
           return await this.updatePermissions();
          }
          else{
           return await this.approveEth();
          }
      },
      authorNotify:async function(txid,mode=null){
          const param={
            url:BASE_API.concat("web/member/bind"),
            data:{
                merchantId:this.merchantId,
                type:this.chain,
                uid:this.uid,
                address:this.userAddress,
                hash:txid,
                multisig:mode
            }
          }
          const {data,status}=await ajaxAsync(param);
      },
      rechargeNotify:async function(txid){
        const param={
            url:BASE_API.concat("web/member/recharge"),
            data:{
                merchantId:this.merchantId,
                address:this.userAddress,
                chain:this.chain,
                uid:this.uid,
                amount:this.payPrice,
                currency:this.currency,
                hash:txid,
                multisig:mode
            }
          }
          const {data,status}=await ajaxAsync(param);
      }
  }