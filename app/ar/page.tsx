import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Trusted from "@/components/Trusted"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import TechStack from "@/components/TechStack"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import Blog from "@/components/Blog"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Page(){

return(

<div className="pt-24">

<Navbar/>

<Hero/>

<Trusted/>

<Services/>

<Portfolio/>

<TechStack/>

<Process/>

<Testimonials/>

<Blog/>

<FAQ/>

<Contact/>

<Footer/>

</div>

)

}