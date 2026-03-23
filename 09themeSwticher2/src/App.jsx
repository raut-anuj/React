import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import Button from './components/Button'
import Card from './components/Card'
import './index.css'

const App = () => {
  const [themeMode, settheme] = useState('light')

  const lightTheme = ()=>{
    settheme('light')
}
  const darkTheme = ()=>{
    settheme('dark')
}

useEffect(() => {

  document.querySelector('html').classList.remove('light', 'dark')
  document.querySelector('html').classList.add(themeMode)
  
}, [themeMode])


  return (
  
  <ThemeProvider value={ {themeMode, lightTheme, darkTheme} }>
    <div className="flex flex-wrap min-h-screen items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
     <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">  
          <Button />  
        </div>

        <div className="w-full max-w-sm mx-auto">  
            <Card />  
        </div>
      </div>
</div>
  </ThemeProvider>

  )
}

export default App