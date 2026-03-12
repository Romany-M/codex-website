"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import useTranslation from "@/lib/useTranslation"
import { projects } from "@/lib/projects"

const categories = [
  "All",
  "Logistics",
  "Fintech",
  "Real Estate",
  "Mobile",
  "Aviation",
  "Banking",
  "Government"
]

export default function Portfolio() {

  const { t, lang } = useTranslation()

  const [filter,setFilter] = useState("All")
  const [visibleCount,setVisibleCount] = useState(9)

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter)

  const displayed = filteredProjects.slice(0,visibleCount)

  return(

<section id="portfolio" className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-4">
{t.portfolio_title}
</h2>

<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
{lang === "en"
? "Real projects. Real impact. Built for the Gulf."
: "مشاريع حقيقية. تأثير حقيقي. مصممة لدول الخليج."}
</p>


<div className="flex flex-wrap gap-3 justify-center mb-12">

{categories.map(cat => (

<button
key={cat}
onClick={()=>{

setFilter(cat)
setVisibleCount(9)

}}
className={`px-8 py-3 rounded-full font-medium transition-all ${
filter === cat
? "bg-blue-600 text-white shadow-lg"
: "bg-white hover:bg-gray-100 text-gray-700"
}`}
>

{cat}

</button>

))}

</div>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{displayed.map((project,i)=>(

<motion.div
key={project.slug}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.05}}
className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
>


<div className="relative h-80 overflow-hidden">

<img
src={project.image}
alt={project.title[lang]}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

<div className="absolute top-6 right-6 bg-white/90 text-xs font-bold px-4 py-1.5 rounded-full">
{project.country}
</div>

</div>


<div className="p-8">

<div className="text-blue-600 font-semibold text-sm mb-2">
{project.client}
</div>

<h3 className="text-2xl font-bold mb-3">
{project.title[lang]}
</h3>

<p className="text-gray-600 line-clamp-3 mb-6">
{project.description[lang]}
</p>

<Link
href={`/projects/view?slug=${project.slug}`}
className="inline-flex items-center gap-3 text-blue-600 font-semibold group-hover:gap-5 transition-all"
>

{t.view_project}

<span className="text-xl">→</span>

</Link>

</div>

</motion.div>

))}

</div>


{visibleCount < filteredProjects.length && (

<div className="flex justify-center gap-6 mt-16">

<button
onClick={()=>setVisibleCount(v=>v+6)}
className="px-10 py-4 bg-white border border-gray-300 rounded-2xl font-semibold hover:bg-gray-50"
>

Load More

</button>

<Link
href="/projects"
className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700"
>

{lang === "en"
? "View All Projects"
: "شاهد كل المشاريع"}

</Link>

</div>

)}

</div>

</section>

)

}