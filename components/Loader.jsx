"use client"

import { useEffect, useState } from "react"

export default function Loader({children}){

const [loading,setLoading]=useState(true)

useEffect(()=>{

setTimeout(()=>{
setLoading(false)
},2000)

},[])

if(loading){

return(

<div className="h-screen flex items-center justify-center bg-black text-white">

<div className="text-center">

<h1 className="text-4xl font-bold mb-4">
Codex
</h1>

<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

</div>

</div>

)

}

return children
}