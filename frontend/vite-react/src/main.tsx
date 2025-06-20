import { Buffer } from 'buffer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'

import App from './App.tsx'
import { config } from './wagmi.ts'

import './index.css'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { GameProvider } from "./contexts/GameContext";

declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <GameProvider>
            <App />
          </GameProvider>
        </MantineProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
