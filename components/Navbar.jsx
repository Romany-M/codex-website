"use client"

import { useState } from "react"
import LanguageSwitcher from "./LanguageSwitcher"
import useTranslation from "@/lib/useTranslation"

export default function Navbar(){

const [open,setOpen] = useState(false)

const { t, lang } = useTranslation()

return(

<nav className="fixed top-0 left-0 w-full bg-white border-b z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-6">

<h1 className="text-2xl font-bold text-blue-600">
Codex
</h1>

<div className="hidden md:flex gap-8 items-center">

<a href={`${lang === "ar" ? "/ar" : ""}`}>
{t.nav_home}
</a>

<a href={`${lang === "ar" ? "/ar" : ""}#services`}>
{t.nav_services}
</a>

<a href={`${lang === "ar" ? "/ar" : ""}#portfolio`}>
{t.nav_portfolio}
</a>

<a href={`${lang === "ar" ? "/ar" : ""}#contact`}>
{t.nav_contact}
</a>

<LanguageSwitcher/>

</div>

<a href={`${lang === "ar" ? "/ar" : ""}#contact`} className="hidden md:block">

<button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
{t.start_project}
</button>

</a>

<button
className="md:hidden text-3xl"
onClick={()=>setOpen(!open)}
>
☰
</button>

</div>

{open && (

<div className="md:hidden bg-white border-t p-6 space-y-4 text-center">

<a href={`${lang === "ar" ? "/ar" : ""}`}>
{t.nav_home}
</a>

<a href={`${lang === "ar" ? "/ar" : ""}#services`}>
{t.nav_services}
</a>

<a href={`${lang === "ar" ? "/ar" : ""}#portfolio`}>
{t.nav_portfolio}
</a>

<a href={`${lang === "ar" ? "/ar" : ""}#contact`}>
{t.nav_contact}
</a>

<div className="flex justify-center">
<LanguageSwitcher/>
</div>

</div>

)}

</nav>

)

}