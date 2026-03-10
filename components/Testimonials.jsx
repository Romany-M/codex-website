"use client"

import { useState,useEffect } from "react"
import useTranslation from "@/lib/useTranslation"

export default function Testimonials(){

const { t } = useTranslation()

const testimonials=[

{ name:"Sarah Johnson", company:"Startup Founder", text:t.testimonial1 },
{ name:"Michael Chen", company:"Tech CEO", text:t.testimonial2 },
{ name:"David Smith", company:"Product Manager", text:t.testimonial3 }

]

const [index,setIndex]=useState(0)

useEffect(()=>{

const interval=setInterval(()=>{
setIndex((prev)=>(prev+1)%testimonials.length)
},4000)

return()=>clearInterval(interval)

},[])

const item=testimonials[index]

return(

<section className="py-24 bg-gray-50 text-center">

<h2 className="text-4xl font-bold mb-16">
{t.testimonials_title}
</h2>

<div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

<p className="text-xl text-gray-600 mb-6">
"{item.text}"
</p>

<h4 className="font-bold text-lg">
{item.name}
</h4>

<p className="text-gray-500">
{item.company}
</p>

</div>

</section>

)

}