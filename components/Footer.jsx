export default function Footer(){

return(

<footer className="bg-black text-white py-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">

<div>

<h3 className="text-2xl font-bold mb-4">
Codex
</h3>

<p className="text-gray-400">
Building modern software solutions for startups.
</p>

</div>

<div>

<h4 className="font-bold mb-4">
Company
</h4>

<ul className="space-y-2 text-gray-400">

<li><a href="#">Home</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>

</ul>

</div>

<div>

<h4 className="font-bold mb-4">
Resources
</h4>

<ul className="space-y-2 text-gray-400">

<li><a href="#blog">Blog</a></li>
<li><a href="#faq">FAQ</a></li>
<li><a href="#contact">Support</a></li>

</ul>

</div>

<div>

<h4 className="font-bold mb-4">
Contact
</h4>

<p className="text-gray-400 mb-4">
hello@codex.dev
</p>


</div>

</div>

<p className="text-center text-gray-500 mt-16">
© 2025 Codex. All rights reserved.
</p>

</footer>

)

}