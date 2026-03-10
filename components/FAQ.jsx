"use client"

import { useState } from "react"

export default function FAQ(){

const faqs=[

{
q:"How long does it take to build a website?",
a:"Most projects take between 2-6 weeks depending on complexity."
},

{
q:"Do you build custom software?",
a:"Yes, we specialize in custom web and mobile applications."
},

{
q:"Do you provide ongoing support?",
a:"Yes, we offer maintenance and long-term support packages."
},

{
q:"Can you redesign existing websites?",
a:"Absolutely. We often improve design, speed and SEO."
}

]

const [open,setOpen]=useState(null)

return(

<section id="faq" className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-16">
Frequently Asked Questions
</h2>

<div className="max-w-3xl mx-auto space-y-6">

{faqs.map((f,i)=>(

<div key={i} className="border rounded-xl p-6 bg-white">

<button
onClick={()=>setOpen(open===i?null:i)}
className="flex justify-between w-full text-left font-semibold"
>

{f.q}

<span>
{open===i ? "-" : "+"}
</span>

</button>

{open===i && (

<p className="mt-4 text-gray-600">
{f.a}
</p>

)}

</div>

))}

</div>

</section>

)
}