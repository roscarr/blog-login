import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import { Context } from '../userContext';
function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const {setuserInfo}=Context()

  const login=async(e)=>{
    e.preventDefault()
    const response=await fetch('http://localhost:4000/login',{
      method:'Post',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
      credentials:'include'
    })
    if (response.ok) {
      response.json().then(userInfo=>{
        setuserInfo(userInfo)
      setRedirect(true)
      })
    }else{
      alert('wrong credential')
    }
  }
  if (redirect) {
    return <Navigate to={'/'}/>
  }
  return (
    <form className=' max-w-screen-sm mx-auto my-0'onSubmit={login}>
      <h1 className=' font-bold mb-3 text-2xl'>Login</h1>
        <input type="text" placeholder='username' className='input' value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input type="password" placeholder='password' className='input' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className='w-full bg-blue-400 rounded-md block py-2'>Login</button>
    </form>
  )
}

export default LoginPage