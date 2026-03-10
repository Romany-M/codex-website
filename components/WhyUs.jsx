"use client"

import { motion } from "framer-motion"

export default function WhyUs(){

const items = [
{
title:"Expert Team",
desc:"Our developers have years of experience building scalable products."
},
{
title:"Modern Technologies",
desc:"We use the latest frameworks and tools to build fast applications."
},
{
title:"High Performance",
desc:"Our solutions are optimized for speed, security and reliability."
}
]

return(

<section className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-16">
Why Choose Codex
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

{items.map((item,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="p-8 bg-white rounded-2xl shadow-lg"
>

<h3 className="text-2xl font-bold mb-4">
{item.title}
</h3>

<p className="text-gray-600">
{item.desc}
</p>

</motion.div>
))}

</div>

</section>

)
}