"use client"

import { useEffect, useState } from "react"
import useTranslation from "@/lib/useTranslation"

export default function Stats(){

const { t } = useTranslation()

const stats=[
{number:150,label:t.stats_projects},
{number:80,label:t.stats_clients},
{number:6,label:t.stats_years},
{number:24,label:t.stats_team}
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
{t.stats_title}
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