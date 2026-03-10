"use client"

import { motion } from "framer-motion"
import useTranslation from "@/lib/useTranslation"

export default function WhyUs(){

const { t } = useTranslation()

const items = [
{ title:t.why1_title , desc:t.why1_desc },
{ title:t.why2_title , desc:t.why2_desc },
{ title:t.why3_title , desc:t.why3_desc }
]

return(

<section className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-16">
{t.why_title}
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

{items.map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
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