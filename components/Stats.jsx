"use client"

import { useEffect, useState } from "react"

export default function Stats(){

const stats=[
{number:150,label:"Projects Delivered"},
{number:80,label:"Happy Clients"},
{number:6,label:"Years Experience"},
{number:24,label:"Team Members"}
]

const [counts,setCounts]=useState(stats.map(()=>0))

useEffect(()=>{

const interval=setInterval(()=>{

setCounts(prev=>

prev.map((count,i)=>{

if(count < stats[i].number){
return count+1
}

return count

})

)

},20)

return ()=>clearInterval(interval)

},[])

return(

<section className="py-24 bg-white">

<h2 className="text-4xl font-bold text-center mb-16">
Our Impact
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

{stats.map((s,i)=>(

<div key={i} className="p-8">

<h3 className="text-4xl font-bold text-blue-600 mb-2">
{counts[i]}+
</h3>

<p className="text-gray-600">
{s.label}
</p>

</div>

))}

</div>

</section>

)

}