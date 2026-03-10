"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import useTranslation from "@/lib/useTranslation"

export default function Hero(){

const { t, lang } = useTranslation()

const { scrollY } = useScroll()
const y = useTransform(scrollY,[0,500],[0,150])

return(

<section className="relative overflow-hidden py-32 text-center gradient-bg">

<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

<motion.div style={{y}}>

<div className="max-w-5xl mx-auto px-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
>

{t.hero_title}{" "}

<span className="relative inline-block px-4 py-1 rounded-lg border border-blue-400/40 text-blue-300 bg-blue-500/10 backdrop-blur-sm">
Codex
</span>

</motion.h1>

<motion.p
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto"
>

{t.hero_desc}

</motion.p>

<div className="flex justify-center gap-6 flex-wrap">

<a href={`/${lang === "ar" ? "ar" : ""}#contact`}>

<button className="glow-btn">
{t.start_project}
</button>

</a>

<a href={`/${lang === "ar" ? "ar" : ""}#portfolio`}>

<button className="border border-white text-white px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition">
{t.view_portfolio}
</button>

</a>

</div>

</div>

</motion.div>

</section>

)

}