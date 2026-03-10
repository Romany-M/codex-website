"use client"

import { useEffect, useState } from "react"

export default function Cursor(){

const [position,setPosition] = useState({x:0,y:0})

useEffect(()=>{

const move = (e)=>{
setPosition({
x:e.clientX,
y:e.clientY
})
}

window.addEventListener("mousemove",move)

return ()=>window.removeEventListener("mousemove",move)

},[])

return(

<div
className="pointer-events-none fixed z-50 w-6 h-6 bg-blue-500/40 rounded-full blur-md"
style={{
left:position.x-12,
top:position.y-12
}}
/>

)

}