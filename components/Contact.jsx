"use client"

import useTranslation from "@/lib/useTranslation"

export default function Contact(){

const { t } = useTranslation()

return(

<section id="contact" className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-12">
{t.contact_title}
</h2>

<p className="text-center text-gray-600 mb-12">
{t.contact_desc}
</p>

<form
action="mailto:hello@codex.dev"
method="post"
encType="text/plain"
className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg"
>

<input
name="name"
placeholder={t.contact_name}
required
className="w-full border p-4 mb-4 rounded-xl"
/>

<input
name="email"
type="email"
placeholder={t.contact_email}
required
className="w-full border p-4 mb-4 rounded-xl"
/>

<textarea
name="message"
placeholder={t.contact_message}
rows="5"
required
className="w-full border p-4 mb-6 rounded-xl"
/>

<button
type="submit"
className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
>

{t.contact_send}

</button>

</form>

</section>

)

}