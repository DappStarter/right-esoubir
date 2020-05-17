require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stone rifle saddle proof harvest muscle army gift'; 
let testAccounts = [
"0x7c1ee9b851ac2969397099024e32c39d991dcf0b7c9e8a21ed036718248b2b90",
"0xfadadf805b2834428e6e6aacd6eb424cc8f45d5d2a5f7893d6d7fd884c2acc72",
"0x13cb348407fb8bf9b7b701ecc2c4de8fdc9d58cf07bc9f78a975771d6b33fb8c",
"0xbdb795265593d51eafd20d0d760b47ab7982f6a9b96b53bda0e70ec367087291",
"0x33bceaccea31cfc2691e120b08e494b48fb81459fe3199cd6ba696c5d61c520e",
"0xc6953050fa30b5fc31fccbf423833f26027a48bc772923f707c5b2d5b09c170b",
"0x9318c742ff7fc4f8746401822d433a07a3c125d339a3c895491a78e11e02d484",
"0x9c90d8c1a1a9201bd55600d324cbbe91379664a215c9ec658b3a35b0247e4882",
"0x15bf4624bb5df47fa768b91e771c592de0317d08b8657e09902860fe43bc6489",
"0xf6318db827be0bfb34720fbee5208d2e5a1540f18e6974581ec612066240de44"
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
            version: '^0.5.11'
        }
    }
};
