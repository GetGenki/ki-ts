// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    mainnet: {
      bip32: {
          private: 0x2875DAFF,
          public: 0x6795DE,
      },
      name: 'kinet',
      nethash: '1fbb14c08ebc90e4a5bc3fac7f7ec19a33f753b0a8b529a3e965687240d2891b',
      token: 'DKI',
      symbol: 'DҜ',
      version: 0x2D,
      explorer: 'http://blockchain.ki',
      wif: 0xbb,
      p2pPort: 4000,
      apiPort: 4003,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
          ip: '167.114.236.26',
          port: 4003,
      },
      peers: [
          '167.114.232.175:4003',
      ],
    },
    devnet: {
      bip32: {
          private: 0x2875DAFF,
          public: 0x6795DE,
      },
      name: 'kinet',
      nethash: '1fbb14c08ebc90e4a5bc3fac7f7ec19a33f753b0a8b529a3e965687240d2891b',
      token: 'DKI',
      symbol: 'DҜ',
      version: 0x2D,
      explorer: 'http://blockchain.ki',
      wif: 0xbb,
      p2pPort: 4000,
      apiPort: 4003,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
          ip: '167.114.236.26',
          port: 4003,
      },
      peers: [
          '167.114.232.175:4003',
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 51,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};
