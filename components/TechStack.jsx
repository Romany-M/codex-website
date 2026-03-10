"use client"

import useTranslation from "@/lib/useTranslation"

export default function TechStack(){

const { t } = useTranslation()

const tech = [
{ name:"React", icon:"⚛️"},
{ name:"Next.js", icon:"▲"},
{ name:"Node.js", icon:"🟢"},
{ name:"AWS", icon:"☁️"},
{ name:"MongoDB", icon:"🍃"},
{ name:"TypeScript", icon:"TS"},
{ name:"Docker", icon:"🐳"},
{ name:"Tailwind", icon:"💨"}
]

return(

<section className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-16">
{t.tech_title}
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6">

{tech.map((item,i)=>(

<div
key={i}
className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition text-center"
>

<div className="text-4xl mb-4">
{item.icon}
</div>

<p className="font-semibold text-gray-700">
{item.name}
</p>

</div>

))}

</div>

</section>

)

}