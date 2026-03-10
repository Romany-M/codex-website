"use client"

import { useState,useEffect } from "react"

export default function Testimonials(){

const testimonials=[

{
name:"Sarah Johnson",
company:"Startup Founder",
text:"Codex built our platform faster than we expected."
},

{
name:"Michael Chen",
company:"Tech CEO",
text:"Amazing team. Professional and very skilled."
},

{
name:"David Smith",
company:"Product Manager",
text:"The best development partner we've worked with."
}

]

const [index,setIndex]=useState(0)

useEffect(()=>{

const interval=setInterval(()=>{

setIndex((prev)=>(prev+1)%testimonials.length)

},4000)

return()=>clearInterval(interval)

},[])

const t=testimonials[index]

return(

<section className="py-24 bg-gray-50 text-center">

<h2 className="text-4xl font-bold mb-16">
What Clients Say
</h2>

<div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

<p className="text-xl text-gray-600 mb-6">
"{t.text}"
</p>

<h4 className="font-bold text-lg">
{t.name}
</h4>

<p className="text-gray-500">
{t.company}
</p>

</div>

</section>

)

}