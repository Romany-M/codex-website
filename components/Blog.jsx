"use client"

import { motion } from "framer-motion"

export default function Blog(){

const posts=[

{
title:"How Startups Build Scalable Web Apps",
desc:"Learn the architecture behind modern scalable platforms.",
img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085"
},

{
title:"Why Companies Choose Next.js",
desc:"Discover why Next.js is dominating modern web development.",
img:"https://images.unsplash.com/photo-1555949963-aa79dcee981c"
},

{
title:"AI is Changing Software Development",
desc:"How artificial intelligence is transforming development.",
img:"https://images.unsplash.com/photo-1677442136019-21780ecad995"
}

]

return(

<section id="blog" className="py-24 bg-white">

<h2 className="text-4xl font-bold text-center mb-16">
Insights & Blog
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

{posts.map((post,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
>

<img
src={post.img}
className="h-52 w-full object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-2">
{post.title}
</h3>

<p className="text-gray-600">
{post.desc}
</p>

</div>

</motion.div>

))}

</div>

</section>

)

}