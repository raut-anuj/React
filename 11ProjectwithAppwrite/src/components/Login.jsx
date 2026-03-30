import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Logo, Input} from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/aut_service'
import {useForm} from "react-hook-form"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    //  yh wala function tb chale gh jb tum login button pr click kro gh
    const login = async(data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if(session){ 
                const userData = await authservice.
                getCurrentUser();
                if(userData)
                    dispatch(authLogin(userData))
                navigate("/")
                // jaisa facebook mh kabhi login krte ho toh phir tum uska home page ph directly ah jah th ho, waisa he yh bhi ha home page ph ah jaye gh user after login.

            }
        } catch (error) {
            setError(error);
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-25">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        
        {/* yha login kh kaam hua ha jisme hm email and password liye ha. */}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login