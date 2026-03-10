import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Stats from "@/components/Stats"
import Portfolio from "@/components/Portfolio"
import WhyUs from "@/components/WhyUs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Process from "@/components/Process"
import Clients from "@/components/Clients"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import TechStack from "@/components/TechStack"
import Divider from "@/components/Divider"
import Trusted from "@/components/Trusted"
import Blog from "@/components/Blog"
export default function Home() {
  return (
    <div className="pt-24">
      <Navbar />
      <Hero />
      <Trusted/>
      <Services />
      <Clients />
      <TechStack />
      <Stats/>
      <Portfolio />
      <Process />
      <Testimonials />
      <WhyUs />
      <Blog />
      <Divider/>
      <FAQ />
      <Contact />
      <Footer />
      <Divider/>
      
    </div>
  )
}