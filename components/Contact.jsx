"use client"

export default function Contact(){

return(

<section id="contact" className="py-24 bg-gray-50">

<h2 className="text-4xl font-bold text-center mb-12">
Start Your Project
</h2>

<p className="text-center text-gray-600 mb-12">
Tell us about your idea and our team will get back to you.
</p>

<form
action="mailto:hello@codex.dev"
method="post"
encType="text/plain"
className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg"
>

<input
name="name"
placeholder="Your Name"
required
className="w-full border p-4 mb-4 rounded-xl"
/>

<input
name="email"
type="email"
placeholder="Your Email"
required
className="w-full border p-4 mb-4 rounded-xl"
/>

<textarea
name="message"
placeholder="Tell us about your project"
rows="5"
required
className="w-full border p-4 mb-6 rounded-xl"
/>

<button
type="submit"
className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
>

Send Message

</button>

</form>

</section>

)
}