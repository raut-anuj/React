import React, { useState, useEffect } from 'react'
import { Footer, Header } from './components'
import { useDispatch } from 'react-redux'
import './App.css'
import authservice from './appwrite/aut_service'
import { login, logout } from './store/authSlice'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
    .then( (userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false) )
  }, [])

 return loading ? null : (
  <div className="min-h-screen flex flex-col bg-gray-400">

    <Header />

    <main className=" flex items-center justify-center">
      Main Content
    </main>

    <Footer />

  </div>
)
  // return loading ? wrap by [div] and send "Loading ": ()
}

export default App
