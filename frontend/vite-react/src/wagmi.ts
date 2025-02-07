import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { PrivateKeyConnector } from "../utils/privateKeyConnector"
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    PrivateKeyConnector({
      chains: [mainnet, sepolia],
      options: {
        privateKey: '0x756775cf401a4cd933515f0e5a17cc5690a90d90dff2d7f1ef6db3958e660093',
      },
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})



declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
