"use client"
import React, { useEffect, useState } from 'react'
import CenterInfo from './components/VIPMain'
import { setToken } from '../../../redux/lib/reducers/vip_reducers/reducers'
import { useDispatch } from 'react-redux'

export default function VIP_total() {
  const dispatch=useDispatch()
  const [token,set_token]=useState<string>("")
  const [formData,setFormData]=useState<object>({})
  useEffect( ()=>{
    const link=window.location.href
    const splitted=link.split("?")
    const filtered=splitted.filter(item=>item.includes("username") || item.includes("password") || item.includes("token"))
    if(filtered){
    const proccessed_data=filtered.map((item)=>item.split("="))
    const formData=Object.fromEntries(proccessed_data)
    set_token(formData.token)
    }
    setFormData(formData)
  },[])
  if(token){
dispatch(setToken(token))
  }
  
  return (
    <div className='w-full'>
        <CenterInfo></CenterInfo>
    </div>
  )
}
