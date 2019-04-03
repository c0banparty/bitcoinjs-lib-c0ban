// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18c0ban Signed Message:\n',
    bech32: 'c0ban',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x12,
    scriptHash: 0x1c,
    wif: 0x88
  },
  testnet: {
    messagePrefix: '\x18c0ban Signed Message:\n',
    bech32: 'c0ban',
    bip32: {
      public: 0x04588788,
      private: 0x04388388
    },
    pubKeyHash: 0x76,
    scriptHash: 0xc6,
    wif: 0xee
  },
  regtest: {
    messagePrefix: '\x18c0ban Signed Message:\n',
    bech32: 'c0ban',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  }
}