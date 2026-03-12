"use client"

import { motion } from "framer-motion"
import useTranslation from "@/lib/useTranslation"
import Link from "next/link"

export default function ProjectCaseStudy({ project }) {

  const { t, lang } = useTranslation()

  return (

<div className="min-h-screen bg-white">

{/* Hero Section */}

<div className="relative h-[85vh] flex items-center justify-center overflow-hidden">

<img
src={project.image}
alt={project.title[lang]}
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60" />

<div className="relative z-10 text-center text-white max-w-4xl px-6">

<div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm mb-6">
{project.client} • {project.country}
</div>

<h1 className="text-6xl font-bold leading-tight">
{project.title[lang]}
</h1>

<p className="mt-6 text-2xl opacity-90">
{project.description[lang]}
</p>

</div>

</div>


<div className="max-w-5xl mx-auto px-6 py-20">

{/* Problem & Solution */}

<div className="grid md:grid-cols-2 gap-16 mb-20">

<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
className="bg-red-50 p-10 rounded-3xl"
>

<h2 className="text-3xl font-bold mb-6 text-red-600">
{t.case_problem}
</h2>

<p className="text-lg leading-relaxed text-gray-700">
{project.problem[lang]}
</p>

</motion.div>


<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
className="bg-emerald-50 p-10 rounded-3xl"
>

<h2 className="text-3xl font-bold mb-6 text-emerald-600">
{t.case_solution}
</h2>

<p className="text-lg leading-relaxed text-gray-700">
{project.solution[lang]}
</p>

</motion.div>

</div>


{/* Tech Stack */}

<div className="bg-gray-900 text-white rounded-3xl p-12 mb-20">

<h3 className="text-2xl font-bold mb-8 text-center">
{t.case_tech}
</h3>

<div className="flex flex-wrap gap-4 justify-center">

{project.tech.map((tech,i)=>(

<span
key={i}
className="bg-white/10 px-6 py-3 rounded-full text-sm font-medium"
>

{tech}

</span>

))}

</div>

</div>


{/* Results */}

<div>

<h2 className="text-3xl font-bold text-center mb-12">
{t.case_results}
</h2>

<div className="grid md:grid-cols-3 gap-8">

{project.results.map((result,i)=>(

<div
key={i}
className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition"
>

<div className="text-5xl font-bold text-blue-600 mb-4">
✓
</div>

<p className="text-lg font-semibold">
{result}
</p>

</div>

))}

</div>

</div>


<div className="text-center mt-16">

<Link
href="/#portfolio"
className="text-blue-600 hover:underline text-lg"
>

← {lang === "en" ? "Back to Portfolio" : "العودة للأعمال"}

</Link>

</div>

</div>

</div>

)

}