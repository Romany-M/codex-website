"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import InteractiveCard from "./InteractiveCard"
import useTranslation from "@/lib/useTranslation"

export default function Portfolio(){

const { t } = useTranslation()

const [selected,setSelected] = useState(null)

const projects=[

{
title:t.project1_title,
desc:t.project1_desc,
img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
link:"/projects/ecommerce"
},

{
title:t.project2_title,
desc:t.project2_desc,
img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
link:"/projects/startup"
},

{
title:t.project3_title,
desc:t.project3_desc,
img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
link:"/projects/dashboard"
},

]

return(

<section id="portfolio" className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-16">
{t.portfolio_title}
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

{projects.map((project,i)=>(

<InteractiveCard key={i}>

<motion.div
onClick={()=>setSelected(project)}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
>

<img
src={project.img}
className="h-56 w-full object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-2">
{project.title}
</h3>

<p className="text-gray-600">
{project.desc}
</p>

</div>

</motion.div>

</InteractiveCard>

))}

</div>


{selected && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

<div className="bg-white rounded-2xl max-w-xl w-full p-8 relative">

<button
onClick={()=>setSelected(null)}
className="absolute top-4 right-4 text-xl"
>
✕
</button>

<img
src={selected.img}
className="rounded-xl mb-6"
/>

<h3 className="text-2xl font-bold mb-2">
{selected.title}
</h3>

<p className="text-gray-600 mb-6">
{selected.desc}
</p>

<a
href={selected.link}
className="bg-blue-600 text-white px-6 py-3 rounded-xl inline-block"
>

{t.view_project}

</a>

</div>

</div>

)}

</section>

)

}