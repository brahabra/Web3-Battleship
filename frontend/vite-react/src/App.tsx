import axios from 'axios'
import { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()


  const [privatekey, setPrivateKey] = useState<string>("")
  
  const vippsAPI = async () => {
    // Redirect
    try {
      const data = axios.get("http://localhost:5173/auth/vipps", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      data.then((response) => {
        setPrivateKey(response.data)
        console.log("DATA")
        localStorage.setItem('accesstoken', JSON.stringify(response.data))
        })        
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>
      <vipps-mobilepay-button
        type="button"
        brand="vipps"
        language="en"
        variant="primary"
        rounded="true"
        verb="login"
        stretched="false"
        branded="true"
        loading="false"
        onClick={vippsAPI}>
        </vipps-mobilepay-button>
        <h2>Account</h2>
        <p>{privatekey}</p>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name }
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>


        <button

        >
          PRIVATE KEY DYNAMICO
        </button>
      </div>
    </>
  )
}

export default App
