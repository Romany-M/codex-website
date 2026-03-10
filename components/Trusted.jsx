"use client"

import useTranslation from "@/lib/useTranslation"

export default function Trusted(){

const { t } = useTranslation()

const logos = [
"https://cdn.worldvectorlogo.com/logos/google-1.svg",
"https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
"https://cdn.worldvectorlogo.com/logos/shopify.svg",
"https://cdn.worldvectorlogo.com/logos/airbnb.svg"
]

return(

<section className="py-20 bg-white">

<p className="text-center text-gray-500 mb-10 text-lg">
{t.trusted_title}
</p>

<div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-12 opacity-70">

{logos.map((logo,i)=>(

<img
key={i}
src={logo}
className="h-10 grayscale hover:grayscale-0 transition"
/>

))}

</div>

</section>

)

}