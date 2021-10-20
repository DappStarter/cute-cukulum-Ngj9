require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food dance remember stick modify honey light army genre'; 
let testAccounts = [
"0x3faf90f4e683e3ae939fd6a24e355d6b213aa4a2247d3a51f7ed487592367f4d",
"0xaa5af251145115bbed05201be2ea391c86d00c9621b7ad9de16c3c3ace9cde64",
"0xd7aa92673492695bdc224012e02c47ec8ce06db4a3cd8da2c68aceb8e345c428",
"0xe5febbc76b9eeefb6460a9d57bb7edcdd1c49d46a58598d1c2894253f407c957",
"0xa3e9e0ef776c8c103fcc00b2c3a39054169f1d7ff3096831710679fbc054a1af",
"0x82513822a90684eb66d5ce080c8a3c8ee0d6679165ce228d8134bf7571752abc",
"0x00759803da8eaa758e1ce04da58dcd041309f650ba2b5ddf203708d91c9488ec",
"0x10d379b7dd451271c2aef30d933144f4321c3727380ed987f474a74dce4ea0ff",
"0x0c8a0e7bf4b6628d27ce6d64cc23836e0989f1748ff7654ae50d66c7c2073e1b",
"0xec4208c8a07887a0280130bd3094ad95d016657cccd1ddceb15c582767bd5ece"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

