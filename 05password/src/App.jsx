import { useState , useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwrodGenerator = useCallback(() => {
    let pass="";
    let str="ASDFGHJKLQWEERTYUIOPZXCVBNNM"
    if(numberAllowed) str+="124567890 "
    if(character) str+= "~!@#$%^&*(){};<>?:[]"
  
    for(let i=1; i<=length; i++){
      let rand = Math.floor((Math.random() * str.length) + 1)
      pass += str.charAt(rand)
    }
    setPassword(pass)

    }, [length, numberAllowed, character, setPassword])

useEffect( () => {
  passwrodGenerator()
  [length, numberAllowed, character, setPassword] } )
  return (
    <>
      <div className='text-4xl text-center text-white'>Password Generator</div>
    </>
  )
}

export default App
