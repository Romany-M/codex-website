"use client"

import { useState } from "react"
import useTranslation from "@/lib/useTranslation"

export default function FAQ(){

const { t } = useTranslation()

const faqs=[

{ q:t.faq1_q , a:t.faq1_a },
{ q:t.faq2_q , a:t.faq2_a },
{ q:t.faq3_q , a:t.faq3_a },
{ q:t.faq4_q , a:t.faq4_a }

]

const [open,setOpen]=useState(null)

return(

<section id="faq" className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-16">
{t.faq_title}
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