"use client"

export default function Process(){

const steps=[

"Discovery",
"Planning",
"Design",
"Development",
"Launch"

]

return(

<section className="py-24">

<h2 className="text-4xl font-bold text-center mb-16">
Our Process
</h2>

<div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 text-center">

{steps.map((step,i)=>(

<div
key={i}
className="p-6 border rounded-xl"
>

<h3 className="font-bold text-lg">
{i+1}. {step}
</h3>

</div>

))}

</div>

</section>

)
}