"use client"

import useTranslation from "@/lib/useTranslation"

export default function Footer(){

const { t } = useTranslation()

return(

<footer className="bg-black text-white py-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">

<div>

<h3 className="text-2xl font-bold mb-4">
Codex
</h3>

<p className="text-gray-400">
{t.footer_desc}
</p>

</div>

<div>

<h4 className="font-bold mb-4">
{t.footer_company}
</h4>

<ul className="space-y-2 text-gray-400">

<li><a href="#">{t.nav_home}</a></li>
<li><a href="#services">{t.nav_services}</a></li>
<li><a href="#portfolio">{t.nav_portfolio}</a></li>

</ul>

</div>

<div>

<h4 className="font-bold mb-4">
{t.footer_resources}
</h4>

<ul className="space-y-2 text-gray-400">

<li><a href="#blog">Blog</a></li>
<li><a href="#faq">FAQ</a></li>
<li><a href="#contact">{t.nav_contact}</a></li>

</ul>

</div>

<div>

<h4 className="font-bold mb-4">
{t.footer_contact}
</h4>

<p className="text-gray-400 mb-4">
hello@codex.dev
</p>

</div>

</div>

<p className="text-center text-gray-500 mt-16">
© 2025 Codex. {t.footer_rights}
</p>

</footer>

)

}