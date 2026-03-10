"use client"

import { useState } from "react"

export default function Navbar() {

const [open,setOpen] = useState(false)


return(
    

<nav className="fixed top-0 left-0 w-full bg-white border-b z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-6">

<h1 className="text-2xl font-bold text-blue-600">
Codex
</h1>

<div className="hidden md:flex gap-8">

<a href="#">Home</a>
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#contact">Contact</a>

</div>

<a href="#contact" className="hidden md:block">
<button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
Start Project
</button>
</a>

<button
className="md:hidden text-3xl"
onClick={()=>setOpen(!open)}
>
☰
</button>

</div>

{open && (

<div className="md:hidden bg-white border-t p-6 space-y-4 text-center">

<a href="#">Home</a>
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#contact">Contact</a>

</div>

)}

</nav>

)
}