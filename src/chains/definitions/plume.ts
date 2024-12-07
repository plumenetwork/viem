import { defineChain } from '../../utils/chain/defineChain.js'

const sourceId = 1 // ethereum

export const plume = /*#__PURE__*/ defineChain({
  id: 98_865,
  name: 'Plume Mainnet',
  nativeCurrency: {
    name: 'Plume Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://phoenix-rpc.plumenetwork.xyz'],
      webSocket: ['wss://phoenix-rpc.plumenetwork.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://phoenix-explorer.plumenetwork.xyz',
      apiUrl: 'https://phoenix-explorer.plumenetwork.xyz/api',
    },
  },
  sourceId,
})
