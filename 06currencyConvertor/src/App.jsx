import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")

  const CurrencyInfo=useCurrencyinfo(from)
  const options = Object.keys(CurrencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert =() => {
    setConvertedAmount(amount*CurrencyInfo[to])
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://imgs.search.brave.com/0P1Vc7qY6gEyP8vQFH0O_2583vosn9mZQjqJtdKasDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjcx/OTU4MzYyL3ZlY3Rv/ci9uZXctaW5kaWFu/LWN1cnJlbmN5LXdp/dGgtc3ltYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/NVpPQkFDT1ZYbXFN/U1o3MEtYbC16VmpG/cnIzZ2hUVE1XQ2dR/eldaQmFnPQ')`,
            }}
        >
  <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
    <form
        onSubmit={(e) => {
            e.preventDefault();
            convert()
            
        }}>
      <div className="w-full mb-1">
         <InputBox
        label="from"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
        />
      </div>
    <div className="relative w-full h-0.5">
        <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
        >
            swap
        </button>
    </div>
        <div className="w-full mt-1 mb-4">
      <InputBox
          label="to"
          amount={convertedAmount}
          currencyOptions ={options}
          onCurrencyChange={(currency)=>setTo(currency)}
          selectCurrency={to}
      />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
    </form>
      </div>
            </div>
        </div>
    );
}

export default App
