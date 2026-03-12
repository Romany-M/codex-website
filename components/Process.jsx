"use client"

import useTranslation from "@/lib/useTranslation"

export default function Process(){

const { t } = useTranslation()

const steps=[

t.process_step1,
t.process_step2,
t.process_step3,
t.process_step4,
t.process_step5

]

return(

<section className="py-24">

<h2 className="text-4xl font-bold text-center mb-16">
{t.process_title}
</h2>

<div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 text-center">

{steps.map((step,i)=>(

<div
key={i}
className="p-6 border rounded-xl flex flex-col items-center gap-3"
>

<div className="text-3xl font-bold">
{i+1}
</div>

<h3 className="font-medium text-lg">
{step}
</h3>

</div>

))}

</div>

</section>

)

}
