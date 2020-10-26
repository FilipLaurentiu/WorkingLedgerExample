const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    networks: {
        ropsten: {                                                        // your blockchain node
            provider: () => new HDWalletProvider('enter mnemonics here', 'http://127.0.0.1:7545', 0, 1, false, "m/44'/60'/0'/0/0"),

            network_id: 3,
        }
    },
    compilers: {
        solc: {
            version: "0.6.10",
            settings: {
                optimizer: {
                    enabled: true
                }
            }
        }
    }
};