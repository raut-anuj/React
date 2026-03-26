import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/aut_service'
import {logout} from '../../store/authSlice'
const LogOutBtn = () => {

    const disptach = useDispatch()

    const logoutHandler = () => {
        authservice.logout().
        then(() => {
            disptach(logout())
        } )
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogOutBtn