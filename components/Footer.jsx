"use client"

import useTranslation from "@/lib/useTranslation"

export default function Footer(){

const { t } = useTranslation()

return(

<footer className="bg-black text-white py-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">

{/* Company */}

<div>

<h3 className="text-2xl font-bold mb-4">
Codex
</h3>

<p className="text-gray-400 mb-4">
{t.footer_desc}
</p>

<p className="text-gray-400">
{t.cr_egypt}: 748215
</p>

<p className="text-gray-400">
{t.cr_saudi}: 2059834172
</p>

</div>

{/* Company Links */}

<div>

<h4 className="font-bold mb-4">
{t.footer_company}
</h4>

<ul className="space-y-2 text-gray-400">

<li>
<a href="#">{t.nav_home}</a>
</li>

<li>
<a href="#services">{t.nav_services}</a>
</li>

<li>
<a href="#portfolio">{t.nav_portfolio}</a>
</li>

</ul>

</div>

{/* Resources */}

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

{/* Contact */}

<div>

<h4 className="font-bold mb-4">
{t.footer_contact}
</h4>

<a
href="https://maps.google.com/?q=Fifth+Settlement+Cairo"
target="_blank"
className="block text-gray-400 hover:text-white transition"
>

📍 {t.address_egypt}

</a>

<br />

<a
href="https://maps.google.com/?q=Dammam+Saudi+Arabia"
target="_blank"
className="block text-gray-400 hover:text-white transition"
>

📍 {t.address_saudi}

</a>

<br />

<a
href="tel:+201203732787"
className="block text-gray-400 hover:text-white transition"
>

📞 +20 120 373 2787

</a>

<br />

<a
href="mailto:hello@codex.dev"
className="block text-gray-400 hover:text-white transition"
>

✉ hello@codex.dev

</a>

</div>

</div>

<p className="text-center text-gray-500 mt-16">
© 2025 Codex. {t.footer_rights}
</p>

</footer>

)

}