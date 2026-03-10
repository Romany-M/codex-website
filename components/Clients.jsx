"use client"

import { motion } from "framer-motion"

export default function Clients(){

const clients=[
"Google",
"Amazon",
"Microsoft",
"Stripe",
"Shopify",
"Airbnb"
]

return(

<section className="py-20">

<h2 className="text-3xl font-bold text-center mb-12">
Trusted by Companies Worldwide
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 text-center">

{clients.map((c,i)=>(

<motion.div
key={i}
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.5}}
className="text-gray-500 text-xl font-semibold"
>

{c}

</motion.div>

))}

</div>

</section>

)
}