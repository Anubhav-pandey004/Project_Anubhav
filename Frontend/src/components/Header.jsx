import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react'
import logo from '../assets/images.png'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((state)=>{
    const user=state.user.user1
    return user 
  })
  useEffect(()=>{

  },[user])

  const [userOptions,setUserOptions]=useState(false)
  return (
    <div className='flex lg:h-14 h-10 max-w-[100vw] bg-slate-200 lg:px-10 px-2 py-1 shadow-lg'>
        
      <div>
        <div className='h-full  flex items-center justify-center'>
        <img src={logo} height={300} width={300} className=' mix-blend-multiply cursor-pointer' onClick={()=>{navigate('/')}}></img>
        </div>
      </div>
      <div className='w-full flex justify-around items-center text-xl md:text-2xl font-semibold text-slate-600 cursor-pointer'>

      
      </div>
      <div className='w-96 flex justify-center items-center ml-4'>
        <Link to="/new-post" className='text-yellow-500  sm:py-1 px-4 rounded-full lg:text-base text-xs text-wrap h-full w-full border border-yellow-500 hover:bg-yellow-500 hover:text-black flex items-center justify-center' >Ask question</Link>
      </div>
      <div className='flex items-center ml-3'>
        <div className='lg:h-10 lg:w-10 h-6 w-6 rounded-full overflow-hidden cursor-pointer border border-black object-contain' onClick={}>
            <img src={user?.profilepic}></img>
        </div>
      </div>
      <div className='bg-red-400 h-56 fixed right-5 top-10 w-40'>

      </div>
    </div>
  )
}

export default Header
