import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/aut_service'
import {logout} from '../../store/authSlice'
const LogOutBtn = () => {

    const dispatch  = useDispatch()

// Pehle:
// Backend logout ho raha hai
// 👉 Fir:
// Redux ko bola ja raha hai:
// ➜ "User ab logout ho gaya hai, state update karo"

    const logoutHandler = () => {
        authservice.logout().
        then(() => {
            dispatch (logout())
        } )
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogOutBtn