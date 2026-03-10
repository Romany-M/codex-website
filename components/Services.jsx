"use client"

import { motion } from "framer-motion"
import useTranslation from "@/lib/useTranslation"

export default function Services(){

const { t } = useTranslation()

const services = [

{
title: t.service_web_title,
desc: t.service_web_desc
},

{
title: t.service_mobile_title,
desc: t.service_mobile_desc
},

{
title: t.service_ui_title,
desc: t.service_ui_desc
}

]

return(

<section id="services" className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-16">
{t.services_title}
</h2>

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

{services.map((service,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
>

<h3 className="text-2xl font-bold mb-4">
{service.title}
</h3>

<p className="text-gray-600">
{service.desc}
</p>

</motion.div>

))}

</div>

</section>

)

}